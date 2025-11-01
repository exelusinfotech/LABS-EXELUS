import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import './ProductList.css';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ProductList = () => {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const query = useQuery();
  const search = query.get('q')?.toLowerCase();

  // ✅ Extract unique categories from products
  const categoriesFromData = useMemo(() => {
    const unique = new Set();
    products.forEach((p) => {
      if (p.category) unique.add(p.category);
    });
    return Array.from(unique).sort();
  }, [products]);

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by alphabet
    if (selectedLetter) {
      if (selectedLetter === 'Others') {
        result = result.filter((p) => {
          const firstChar = (p.name || '').charAt(0).toUpperCase();
          return !alphabet.includes(firstChar);
        });
      } else {
        result = result.filter((p) =>
          (p.name || '').toUpperCase().startsWith(selectedLetter)
        );
      }
    }

    // Filter by search term
    if (search) {
      result = result.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(search)) ||
          (p.cas && p.cas.toLowerCase().includes(search))
      );
    }

    setFilteredProducts(result);
  }, [search, selectedLetter, selectedCategory, products]);

  const handleProductClick = (product) => {
    navigate(`/products/${product.code}`);
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    navigate('/products'); // reset query param
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    navigate('/products'); // reset query param
  };

  return (
    <div className="product-page">
      <h2 className="title">{selectedCategory || 'Products'}</h2>

      {/* Alphabet Filter */}
      <div className="alphabet-filter">
        {[...alphabet, 'Others'].map((letter) => (
          <button
            key={letter}
            className={selectedLetter === letter ? 'active' : ''}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="content">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li
              className={selectedCategory === '' ? 'active' : ''}
              onClick={() => handleCategoryClick('')}
            >
              All
            </li>
            {categoriesFromData.map((cat) => (
              <li
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Product List */}
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="product-card"
                onClick={() => handleProductClick(product)}
                title={product.name}
              >
                {product.name}
              </div>
            ))
          ) : (
            <p>No products found for this filter.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
