import React from 'react';
import './Footer.css';

import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p className="logo">TasteBud Cafe</p>
      <div className="footer-flex">
        <div className="brand">
          <div className="address">
            <FaMapMarkerAlt />
            <p>No. 24 Old GRA, Port Harcourt.</p>
          </div>

          <div className="phone">
            <FaPhoneAlt />
            <p>+234 002 436 0983</p>
          </div>

          <div className="email">
            <FaEnvelope />
            <p>tastybudcafe@gmail.com</p>
          </div>
        </div>

        <div className="footer-menu">
          <ul>
            <li>Menu</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="socials">
          <p>Connect with us</p>
          <ul>
            <li>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </li>
            <li>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </li>
            <li>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="copy">
        <p>Copyright © 2021 - TasteBud Cafe.</p>
        <p className="dev-credit">
          Designed & Developed by{' '}
          <a href="https://github.com/Dr-Oxy" rel="noreferrer" target="_blank">
            Chioma Otu
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
