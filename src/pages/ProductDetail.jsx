import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ProductDetails.css';
import ParticlesBackground from '../components/ParticlesBackground';

const ProductDetail = () => {
  const { code } = useParams();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const product = products.find((p) => p.code === code);
  if (!product) return <h2 style={{ padding: '2rem' }}>Product Not Found</h2>;

  let imageSrc;
  try {
    imageSrc = require(`../assets/${product.code}.png`);
  } catch {
    imageSrc = require(`../assets/EXL-001.png`);
  }

  return (
    <div className="product-detail-wrapper">
      <ParticlesBackground />
      <div className="product-detail-container" data-aos="fade-up">
        <h2 className="product-title" data-aos="zoom-in">{product.name}</h2>
        <div className="product-detail-card" data-aos="fade-up">
          <img className="product-image animated-image" src={imageSrc} alt={product.name} />
          <div className="product-info">
            <p className="animated-text delay-1">🔢 <strong>Product Code:</strong> {product.code}</p>
            <p className="animated-text delay-2">🧪 <strong>CAS No:</strong> {product.cas}</p>
            <p className="animated-text delay-3">🧬 <strong>Molecular Formula:</strong> {product.formula}</p>
            <p className="animated-text delay-4">⚖️ <strong>Molecular Weight:</strong> {product.weight}</p>
            <p className="animated-text delay-5">📦 <strong>Inventory Status:</strong> {product.stock}</p>

            
           <div className="quote-button-wrapper">
  <button className="quote-button" onClick={() => setShowModal(true)}>Request Quote</button>
</div>

          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Request a Quote</h3>
            <form className="quote-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Quote submitted!');
              setShowModal(false);
            }}>
              <input type="text" name="name" id="name" placeholder="Your Name" required />
              <input type="email" name="email" id="email" placeholder="Your Email" required />
              <textarea name="message" id="message" placeholder="Message" rows="4" required></textarea>
              <button type="submit">Send Request</button>
              <button type="button" className="close-btn" onClick={() => setShowModal(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
