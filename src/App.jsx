import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { productsDB } from './data/products';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('all');
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Please add items to cart first!");
      return;
    }

    let message = "Hello Lemonade, I would like to place an order:%0A";
    let total = 0;
    cart.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) (₹${item.price} each)%0A`;
      total += item.price * item.quantity;
    });
    message += `%0ATotal: ₹${total}%0A%0A`;

    const deliveryInfo = prompt("Please enter your address for home delivery or your table number:");
    if (!deliveryInfo) {
      alert("Delivery information is required to place the order.");
      return;
    }
    message += "My Address For Home Delivery: My Table Number is: " + deliveryInfo;

    window.open(`https://wa.me/918884900850?text=${message}`, '_blank');
  };

  return (
    <div className="App">
      <Header cartCount={cart.length} toggleCart={toggleCart} />
      <Hero />
      <Menu 
        products={productsDB} 
        filter={filter} 
        onFilterChange={setFilter} 
        onAddToCart={addToCart} 
      />
      <Location />
      <Footer />
      <Cart 
        cart={cart} 
        isOpen={cartOpen} 
        toggleCart={toggleCart} 
        removeFromCart={removeFromCart} 
        placeOrder={placeOrder} 
      />
    </div>
  );
}

export default App;
