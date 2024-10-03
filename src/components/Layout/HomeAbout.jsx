import React from "react";
import "./HomeAbout.css";
import { servicesList } from "../../utils/data/shishafeatures";

const HomeAbout = () => {
  return (
    <div className="homeabout-container">
      <div className="head-section">
        <div className="tag">Find Peace in Our Soothing Environment</div>
        <div className="Experience-Head">shisha cafe Book Now</div>
        <hr />
      </div>
      <div className="services">
        {servicesList.map((service, index) =>
          <div className="homeabout-service" key={index}>
            <img src={service.image} alt="" />
            <span className="service-name">
              {service.services}
            </span>
            <span className="service-details">
              {service.description}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeAbout;
