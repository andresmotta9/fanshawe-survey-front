import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Socials */}
        <div className="footer-logo">
        <span
  className="logo-text"
  onClick={() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // Scroll to top
    setTimeout(() => {
      window.location.reload(); // Refresh after ensuring scroll
    }, 700);
  }}
  style={{ cursor: "pointer" }}
>
  FanSurvey
</span>

          <div className="social-icons">
            <a href="#" className="circle"></a>
            <a href="#" className="circle"></a>
            <a href="#" className="circle"></a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>
            <a href="mailto:fansurveys25@gmail.com">fansurvey25@gmail.com</a>
          </p>
          <p>
            Providing IT program recommendations based on your skills &
            interests.
          </p>
          <p>
            <a href="tel:+12268833114">+1 (226)-883-3114</a>
          </p>
        </div>

        {/* Subscribe Section */}
        <div className="footer-subscribe">
          <h4>SUBSCRIBE</h4>
          <p>
            Enter your email to get updates on Fanshawe IT courses and
            recommendations
          </p>
          <form>
            <input type="email" placeholder="example@gmail.com" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
      <p>
  © 2025{" "}
  <span
    style={{ cursor: "pointer" }}
    onClick={() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // Scrolls to top
      setTimeout(() => {
        window.location.reload(); // Refreshes the page
      }, 700);
    }}
    onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
    onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
  >
    FanSurvey
  </span>
  . All rights reserved.
</p>

      </div>
    </footer>
  );
};

export default Footer;
