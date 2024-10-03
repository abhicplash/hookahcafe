import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-blur">
        <div className="footer-timing">
          <h2>Opening Hours</h2>
          <h4> Monday ______ 11:00 AM - 01:00 AM</h4>
          <h4> Tuesday ______ 11:00 AM - 01:00 AM</h4>
          <h4> Wednesday __ 11:00 AM - 01:00 AM</h4>
          <h4> Thursday _____ 11:00 AM - 01:00 AM</h4>
          <h4> Friday ________ 11:00 AM - 02:00 AM</h4>
          <h4> Saturday ____ 11:00 AM - 02:00 AM</h4>
          <h4> Sunday ______ 11:00 AM - 01:00 AM</h4>
        </div>
        <div className="footer-contact">
          <h2>Reach us</h2>
          <div className="reachus-details">
            <div className="footer-icons">
              <FaInstagram />
              <FaFacebookSquare />
              <FaSquareXTwitter />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2816682357447!2d55.26672028005123!3d25.193721976953263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682b14555555%3A0xd1c5eae615432462!2zQm9zcG9ydXMgVHVya2lzaCBDdWlzaW5lIC0gQm91bGV2YXJkIC0g2YXYt9i52YUg2KjYs9io2YjYsdizINio2YjZhNmK2YHYp9ix2K8!5e0!3m2!1sen!2sin!4v1727965748086!5m2!1sen!2sin"
              // width="600"
              // height="450"
              title="map"
              className="footer-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
