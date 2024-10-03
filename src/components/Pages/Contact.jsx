import React from "react";
import Layout from "../Layout/Layout";
import "./Contact.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GiEnvelope } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout>
      <div className="contact-container">
        <div className="pagetopBanner">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-details">
          <div>
            <h2>Follow us on</h2>
            <div className="contact-mediaLinks">
              <FaFacebookSquare className="icon" />
              <FaInstagram className="icon" />
              <FaSquareXTwitter className="icon" />
              <FaWhatsapp className="icon" />
            </div>
          </div>
          <div className="mapandcall">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.2816682357447!2d55.26672028005123!3d25.193721976953263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682b14555555%3A0xd1c5eae615432462!2zQm9zcG9ydXMgVHVya2lzaCBDdWlzaW5lIC0gQm91bGV2YXJkIC0g2YXYt9i52YUg2KjYs9io2YjYsdizINio2YjZhNmK2YHYp9ix2K8!5e0!3m2!1sen!2sin!4v1727965748086!5m2!1sen!2sin"
              title="map"
              className="contact-map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div>
              <h2>For - Information</h2>
              <div>
                <div className="contact-link-details">
                  <FaPhoneAlt />+971-12345678
                </div>
                <div className="contact-link-details">
                  <GiEnvelope />info@hookah.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
