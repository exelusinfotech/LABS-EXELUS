// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import './Home.css';
import exe1 from '../assets/exe1.jpg';
import exe2 from '../assets/exe2.jpg';
import exe3 from '../assets/exe3.jpg';
import exe4 from '../assets/exe4.jpg';

import chem2 from '../assets/chem2.png';
import chem3 from '../assets/chem3.png';
import chem4 from '../assets/chem4.png';
import chemistry4 from '../assets/chemistry4.png';

import iso from '../assets/iso.png';
import who from '../assets/who.png';
import accediate3 from '../assets/accediate3.png';
import accediate4 from '../assets/accediate4.png';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [exe1, exe2, exe3, exe4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const products = [
    {
      title: 'N-Nitroso Vortioxetine',
      img: chem2,
      batch: 'EXL-001',
      cas: '123456-78-9',
      formula: 'C18H22N2S',
      weight: '298.45',
    },
    {
      title: 'Clarithromycin‑13CD3',
      img: chem3,
      batch: 'EXL-002',
      cas: '987654-32-1',
      formula: 'C38H66D3N1O13',
      weight: '751.0',
    },
    {
      title: 'N-Nitroso-varenicline',
      img: chem4,
      batch: 'EXL-003',
      cas: '456789-01-2',
      formula: 'C13H13N3O',
      weight: '227.26',
    },
    {
      title: 'N-Nitrosodimethylamine – 13C2D6',
      img: chemistry4,
      batch: 'EXL-004',
      cas: '234567-89-0',
      formula: '13C2D6N2O',
      weight: '82.1',
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
      </div>

      {/* About Section */}
      <section className="section about-section">
        <h2>About Us</h2>
        <p>
          Exelus Labs is a leading provider of high-quality chemical reference standards, impurities, and stable isotopes for research and development purposes. We are dedicated to ensuring regulatory compliance and helping pharmaceutical organizations meet global standards. Our team of experienced chemists, stringent quality control processes, and cutting-edge facilities make us a trusted partner in the chemical and pharmaceutical industries.
        </p>
      </section>

      {/* Products Section */}
      <section className="section">
        <h2>Latest Products</h2>
        <div className="products">
          {products.map((product, i) => (
            <div className="product-card" key={i}>
              <div className="product-title">{product.title}</div>
              <img src={product.img} alt={product.title} />
              <table className="product-details">
                <tbody>
                  <tr><td>Batch No.</td><td>{product.batch}</td></tr>
                  <tr><td>CAS No.</td><td>{product.cas}</td></tr>
                  <tr><td>Molecular Formula</td><td>{product.formula}</td></tr>
                  <tr><td>Molecular Weight</td><td>{product.weight}</td></tr>
                  <tr><td>Inventory</td><td>In Stock</td></tr>
                </tbody>
              </table>
              <button className="btn">Request Quote</button>
            </div>
          ))}
          <div className="updates-card">
            <h3 className="card-title">Latest Updates</h3>
            <p>Stay tuned for our newest products and innovations</p>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <section className="section">
        <h2>Our Accreditation</h2>
        <div className="accreditation-scroll-wrapper">
          <div className="badge"><img src={iso} alt="ISO Certified" /><p>ISO Certified</p></div>
          <div className="badge"><img src={who} alt="WHO GMP Certified" /><p>WHO GMP Certified</p></div>
          <div className="badge"><img src={accediate3} alt="Accreditation 3" /><p>Accreditation 3</p></div>
          <div className="badge"><img src={accediate4} alt="Accreditation 4" /><p>Accreditation 4</p></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
