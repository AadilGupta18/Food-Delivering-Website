import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content" id="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            This is a food delivery website which will deliver food to your
            doorsteps in half an hour. Get Tasty and Fresh Food Now.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Shipping Time</li>
            <li>1-2 days</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 94785-62185</li>
            <li>guptaaadil967@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © FoodieFrizzy.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
