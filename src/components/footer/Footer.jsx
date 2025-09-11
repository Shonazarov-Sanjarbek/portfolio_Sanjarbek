import React from "react";
import "./_footer.scss";
import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer({ logoText, description, socials = [] }) {
  return (
      <footer className="footer">
        <div className="container">
        <div className="footer__wrapper">
          {/* Left */}
          <div className="footer__left">
            <h2 className="footer__logo">{logoText}</h2>
            <p className="footer__desc">{description}</p>
          </div>

          {/* Right */}
          <div className="footer__right">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        </div>
      </footer>
  );
}

export default Footer;
