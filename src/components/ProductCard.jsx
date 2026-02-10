import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity
    };
    onAddToCart(cartItem);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="product-card">
      <img src={product.img} className="product-img" alt={product.name} />
      <div className="product-info">
        <div className="product-title">
          {product.name}
        </div>
        <div className="product-desc">{product.desc}</div>

        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <div className="product-footer">
          <div className="price">₹{product.price * quantity}</div>
          <button className={`add-btn ${added ? 'added' : ''}`} onClick={handleAddToCart}>
            <i className={`fas ${added ? 'fa-check' : 'fa-plus'}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
