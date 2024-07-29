import React from 'react';
import '../Assert/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>
            Coimbatore headquartered Let'sParty is an exciting service start-up that provides a platform to connect the best service providers to the customer.
          </p>
          <p>Get connected with us on the social network!</p>
          <div className="social-icons">
            <a href="https://www.youtube.com/@Sripriya-f3d"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/sripriya-g-984276257/"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h3>Home</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="/cancellation">Refund & Cancellation</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Palakadu main road,Coimbatore , India</p>
          <p>letspartygmail.com</p>
          <p>+91 9043133423</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Let's Party Pvt Ltd 2024</p>
        <button className="callback-btn">Request Callback</button>
      </div>
    </footer>
  );
};

export default Footer;
