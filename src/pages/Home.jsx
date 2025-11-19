
// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import './Home.css';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import slide6 from '../assets/slide6.jpg';
import slide7 from '../assets/slide7.jpg';
import chem2 from '../assets/chem2.png';
import chem3 from '../assets/chem3.png';
import chem4 from '../assets/chem4.png';
import chem7 from '../assets/chem7.png';
import Rizan from '../assets/Rizan.png';
import iso1 from '../assets/iso1.jpg';
import iso2 from '../assets/iso2.jpg';
import who from '../assets/who.png';
import accediate3 from '../assets/accediate3.png';
import accediate4 from '../assets/accediate4.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const scrollCarousel = (direction) => {
    const container = document.querySelector('.products-container');
    const scrollAmount = 300; // Adjust scroll amount as needed
    if (direction === 1) {
      container.scrollLeft += scrollAmount;
    } else {
      container.scrollLeft -= scrollAmount;
    }
  };

  const products = [
    {
      title: 'N-Nitroso Vortioxetine',
      img: chem2,
      batch: 'EXL-001',
      cas: '',
      formula: 'C18H22N2S',
      weight: '298.45',
    },
    {
      title: 'Clarithromycin‑13CD3',
      img: chem3,
      batch: 'EXL-002',
      cas: '',
      formula: 'C38H66D3N1O13',
      weight: '751.0',
    },
    {
      title: 'N-Nitroso-varenicline',
      img: chem4,
      batch: 'EXL-003',
      cas: '',
      formula: 'C13H13N3O',
      weight: '227.26',
    },
    {
      title: 'N-Nitroso Rizatriptan',
      img: Rizan,
      batch: 'EXL-004',
      cas: '',
      formula: 'C15H18N6O',
      weight: '298.34',
    },
    {
      title: 'N-Nitroso Enalapril',
      img: chem7,
      batch: 'EXL-005',
      cas: '',
      formula: 'C20H27N3O6',
      weight: '405.44',
    },


  ];

  return (
    <div className="home">
      {/* Slideshow */}
      <div className="slideshow-container">
        {slides.map((src, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={src} alt={`Slide ${index + 1}`} className="full-slide" />
          </div>
        ))}
        <button className="explore-btn" onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}>
          Explore More
        </button>
      </div>

      {/* About Section */}
      <section className="section about-section">
        <h2>About Us</h2>
        <p>
          Exelus Labs is a leading provider of high-quality chemical reference standards, pharmaceutical impurities, metabolites, and stable isotopes that support research, development, and regulatory submissions worldwide. We specialize in delivering reliable analytical materials that help pharmaceutical, biotechnology, and research organizations achieve scientific excellence and regulatory compliance.
        </p>
        <p>
          With a strong focus on quality, precision, and innovation, Exelus Labs has built a reputation for excellence in the field of impurity profiling and characterization. Our state-of-the-art analytical and synthesis facilities, combined with a team of highly qualified scientists, enable us to develop and supply complex reference materials with uncompromising purity and accuracy.
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="section">
        <h2>Latest Products</h2>
        <div className="products-carousel">
          <button className="carousel-arrow left-arrow" onClick={() => scrollCarousel(-1)}>&#10094;</button>
          <div className="products-container">
            <div className="products">
              {products.map((product, i) => (
                <div className="product-card" key={i}>
                  <h3 className="product-title" title={product.title}>
                    {product.title}
                  </h3>
                  <div className="product-img">
                    <img src={product.img} alt={product.title} />
                  </div>
                  <table className="product-details">
                    <tbody>
                      <tr><td>Batch No.</td><td>{product.batch}</td></tr>
                      <tr><td>CAS No.</td><td>{product.cas}</td></tr>
                      <tr><td>Molecular Formula</td><td>{product.formula}</td></tr>
                      <tr><td>Molecular Weight</td><td>{product.weight}</td></tr>
                      <tr><td>Inventory</td><td>In Stock</td></tr>
                    </tbody>
                  </table>
                  <div className="button-wrapper">
                    <a
                      href={`mailto:info@exeluslabs.com?subject=${encodeURIComponent('Request Quote for ' + product.title)}`}

                      className="btn"
                    >
                      Request Quote
                    </a>

                  </div>
                </div>
              ))}
              <div className="updates-card">
                <h3 className="card-title">Latest Updates</h3>
                <p>Stay tuned for our newest products and innovations</p>
              </div>
            </div>
          </div>
          <button className="carousel-arrow right-arrow" onClick={() => scrollCarousel(1)}>&#10095;</button>
        </div>
      </section>
      {/* Accreditation Section */}
      <section className="section">
        <h2>Our Accreditation</h2>
        <div className="accreditation-scroll-wrapper">
          <div className="badge"><img src={iso1} alt="ISO Certified" /></div>
          <div className="badge"><img src={iso2} alt="ISO Certified" /></div>
          <div className="badge"><img src={who} alt="WHO GMP Certified" /></div>
          <div className="badge"><img src={accediate3} alt="Accreditation 3" /></div>
          <div className="badge"><img src={accediate4} alt="Accreditation 4" /></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
