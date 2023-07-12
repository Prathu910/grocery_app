import React from "react";
import "./Footer.scss";
import Logo from "../../assets/Vector.png";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="f-info">
        <div className="f-title logo-f">
          <img src={Logo} alt="logo" />
          <h2>Logo</h2>
        </div>
        <p>
          <span className="hightlight">Address: </span>1762 School House Road
        </p>
        <p>
          <span className="hightlight">Call us: </span>1233-777
        </p>
        <p>
          <span className="hightlight">Email: </span>groceyish@contact.com
        </p>
      </div>
      <div className="f-info">
        <div className="f-title">
          <p>Menu</p>
        </div>
        <p>Home</p>
        <p>About us</p>
        <p>Products</p>
      </div>
      <div className="f-info">
        <div className="f-title">
          <p>Quick Links</p>
        </div>
        <p>Terms & Conditions</p>
        <p>Return & Refund Policy</p>
        <p>Shipping Policy</p>
      </div>
      <div className="f-info">
        <div className="f-title">
          <p>Security</p>
        </div>
        <p>Privacy Policy</p>
        <p>Payment Policy</p>
      </div>
    </div>
  );
};

export default Footer;
