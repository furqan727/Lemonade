import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* <div className="footer-logo">
          <img src="/logo_2.jpg" width="40px" />
          <span>Lemonade</span>
        </div> */}
        <div className="social-links">
          <a href="https://www.instagram.com/lemonade6714?igsh=NXAyNXFmbzRtamRw" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://www.whatsapp.com/channel/0029VafK1rHAO7RHDbwLvZ3l" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
        </div>
        <div className="copyright">
          &copy; 2024 Lemonade Restaurant. All rights reserved.Lic. No. 11221326000292
        </div>
      </div>
    </footer>
  );
};

export default Footer;
