import React from 'react';
import ProductCard from './ProductCard';
import './Menu.css';

const Menu = ({ products, filter, onFilterChange, onAddToCart }) => {
  const filteredProducts = filter === 'all' ? products : products.filter(p => {
    if (filter === 'burgers') return p.category === 'Burger' || p.category === 'Veg Burger';
    if (filter === 'rolls') return p.category === 'Chicken Roll';
    if (filter === 'friedchicken') return p.category === 'Fried Chicken';
    if (filter === 'fries') return p.category === 'Fries';
    if (filter === 'pizza') return p.category === 'Veg Pizza' || p.category === 'Non-Veg Pizza';
    if (filter === 'drinks') return p.category === 'Drinks';
    if (filter === 'dessert') return p.category === 'Dessert' || p.category === 'Ice Cream';
    return false;
  });

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <div className="section-title">
          <span>Delicious</span>
          <h2>Our Menu</h2>
        </div>

        <div className="filters">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => onFilterChange('all')}>All</button>
          <button className={`filter-btn ${filter === 'burgers' ? 'active' : ''}`} onClick={() => onFilterChange('burgers')}>Burgers</button>
          <button className={`filter-btn ${filter === 'rolls' ? 'active' : ''}`} onClick={() => onFilterChange('rolls')}>Rolls</button>
          <button className={`filter-btn ${filter === 'friedchicken' ? 'active' : ''}`} onClick={() => onFilterChange('friedchicken')}>Fried Chicken</button>
          <button className={`filter-btn ${filter === 'fries' ? 'active' : ''}`} onClick={() => onFilterChange('fries')}>Fries</button>
          <button className={`filter-btn ${filter === 'pizza' ? 'active' : ''}`} onClick={() => onFilterChange('pizza')}>Pizza</button>
          <button className={`filter-btn ${filter === 'drinks' ? 'active' : ''}`} onClick={() => onFilterChange('drinks')}>Cold Drinks</button>
          <button className={`filter-btn ${filter === 'dessert' ? 'active' : ''}`} onClick={() => onFilterChange('dessert')}>Ice creams</button>
        </div>

        <div className="menu-grid" id="menu-container">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
