import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* اللوجو و اسم الجيم */}
          <div className="footer-logo">
            <img src="/Assets/logo2.png" alt="Captain Gym Logo" className="logo" />
            <h2>Captain Hagar</h2>
          
          </div>

          {/* روابط سريعة */}
         
          {/* أيقونات السوشيال ميديا */}
          <div className="social-icons">
              <p className="lead">For contact :</p>
            <a href="https://www.instagram.com/hagar.alaa74?igsh=a2hybjl5bndsNDQx" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/share/1Hu44RGmx9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
           
           
          </div>
        </div>
        <p className="footer-text">© 2025 Neama Ali. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
