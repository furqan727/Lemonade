import React from 'react';
import './Cart.css';

const Cart = ({ cart, isOpen, toggleCart, removeFromCart, placeOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => e.target === e.currentTarget && toggleCart()}>
      <div className="cart-sidebar">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h2>Your Order</h2>
          <i className="fas fa-times" style={{cursor: 'pointer'}} onClick={toggleCart}></i>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p style={{textAlign: 'center', color: '#999', marginTop: '50px'}}>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div>
                  <strong>{item.name} (x{item.quantity})</strong><br />
                  <small>₹{item.price} each</small>
                </div>
                <i className="fas fa-trash" style={{color: 'red', cursor: 'pointer'}} onClick={() => removeFromCart(index)}></i>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="total-price">Total: ₹<span>{total}</span></div>
          <button className="btn" style={{width: '100%'}} onClick={placeOrder}>Place Order via WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
