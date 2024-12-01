import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Footer.scss';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if footer is in view when user scrolls
  const checkVisibility = () => {
    const footerElement = document.getElementById('footer');
    const footerPosition = footerElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition < windowHeight * 0.8) { // 80% of the page height
      setIsVisible(true);
    }
  };

  useEffect(() => {
    // Listen for scroll events to detect when footer is in view
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on initial load
    return () => window.removeEventListener('scroll', checkVisibility);
  }, []);

  return (
    <footer id="footer" className={`footer ${isVisible ? 'animate' : ''}`}>
      <div className="footer-content">
        {/* Navigation Links */}
        <div className="footer-links">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            Portfolio
          </Link>
        </div>

        {/* Social Media (GitHub) Link */}
        <div className="footer-social">
          <a
            href="https://github.com/Adogacodes"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub
          </a>
        </div>

        {/* Contact Email */}
        <div className="footer-contact">
          <p>Contact: <a href="mailto:vagotech0@gmail.com">vagotech0@gmail.com</a></p>
        </div>

        {/* Copyright Notice */}
        <div className="footer-copyright">
          <p>© 2024 Adoga Isaac. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
