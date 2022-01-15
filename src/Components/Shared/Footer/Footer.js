import React from "react";
import Logo from "../../../assets/images/logo.png";
import Fade from "react-reveal/Fade";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-main-wrapper">
      <Fade bottom>
        <div className="footer-content-wrap">
          <img src={Logo} alt="Logo img" />
          <span className="footer-brand-text">
            <span className="brand-logo-text">Unified</span> Analytics
          </span>
        </div>
      </Fade>
    </div>
  );
};

export default Footer;
