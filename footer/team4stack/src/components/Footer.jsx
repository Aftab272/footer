import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const footerLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Cookies Policy', url: '/cookies' },
    { name: 'Contact Support', url: '/contact' },
    { name: 'Developers', url: 'https://www.team4stack.com', external: true },
    { name: 'Help Center', url: '/help' },
    { name: 'Terms & Conditions', url: '/terms' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Team4Stack</h2>
          </div>
          <div className="footer-links">
            {footerLinks.map((link, index) => (
              link.external ? (
                <a 
                  key={index} 
                  href={link.url} 
                  className="footer-link"
                >
                  {link.name}
                </a>
              ) : (
                <Link key={index} to={link.url} className="footer-link">
                  {link.name}
                </Link>
              )
            ))}
          </div>
          <div className="footer-social">
            <p>© {new Date().getFullYear()} Team4Stack. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;