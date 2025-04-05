
import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"; // Import icons

import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: sweta227@gmail.com</p>
          <p>Phone: +91-9142462686</p>

        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://twitter.com/blockchainvote"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
               <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://facebook.com/blockchainvote"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="social-icon" />
            </a>
            <a
              href="https://linkedin.com/company/blockchainvote"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Blockchain Voting System.
        </p>
      </div>
    </footer>
  );
};

export default Footer;