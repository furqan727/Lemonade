import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section className="location-section" id="about">
      <div className="container">
        <div className="location-grid">
          <div className="location-info">
            <h3>Visit Us Today</h3>
            <p style={{marginBottom: '20px', lineHeight: '1.6'}}>We are located in the heart of Shimoga at ilyaz Nagar. Come enjoy the best desserts in town with friends and family.</p>
            
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>100ft Road, Ilyas Nagar, Shimoga, Karnataka</div>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <div>Open Daily: 10:00 AM - 10:00 PM</div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>+91 8884900850</div>
            </div>
            
            <a href="https://maps.app.goo.gl/5v4auWhmV234w5z4A" target="_blank" rel="noopener noreferrer" className="btn" style={{marginTop: '10px'}}>Get Directions</a>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d!13.9216922202764, 75.55777602943319!3d13.93!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU1JzQ4LjAiTiA3NcKwMzQnMDEuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              style={{border: '0'}} 
              allowFullScreen="" 
              aria-hidden="false" 
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
