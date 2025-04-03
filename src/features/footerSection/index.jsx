import React, { useState } from "react";
import "./styles.css";
import FacebookLogo from "./logos/Facebook_logo.png";
import InstagramLogo from "./logos/Instagram_logo.png";
import TwitterLogo from "./logos/Twitter_logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
      setEmail("");
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <footer className="footer">
      {showPopup && (
        <div className="subscribe-popup">
          <div className="popup-content">
            <p>Your email is subscribed to us! Yayy 🎉</p>
          </div>
        </div>
      )}

      <div className="footer-container">
        <div className="footer-logo">
          <span
            className="logo-text"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              setTimeout(() => {
                window.location.reload();
              }, 700);
            }}
            style={{ cursor: "pointer" }}
          >
            FanSurvey
          </span>

          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebook fontSize={30}/>
            </a>
            <a href="#" className="social-icon">
              <FaInstagram fontSize={30}/>
            </a>
            <a href="#" className="social-icon">
              <FaTwitter fontSize={30}/>
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>
            <a href="mailto:fansurveys25@gmail.com">fansurvey25@gmail.com</a>
          </p>
          <p>
            Providing IT program recommendations based on your skills & interests.
          </p>
          <p>
            <a href="tel:+12268833114">+1 (226)-883-3114</a>
          </p>
        </div>

        <div className="footer-subscribe">
          <h4>SUBSCRIBE</h4>
          <p>
            Enter your email to get updates on Fanshawe IT courses and recommendations
          </p>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="example@gmail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2025 <span>FanSurvey</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;