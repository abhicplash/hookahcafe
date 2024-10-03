import React from "react";
import "./HomeWho.css";
import { aboutDetailsList } from "../../utils/data/aboutdata";

const HomeWho = () => {
  return (
    <div className="homewho-container">
      <div className="wrapper">
        <h1>
          <span>Hookah</span>
          {/* -Cafe */}
        </h1>
        <p className="about-paragraph">
          Welcome to <span>Hookah</span> cafe, Dubai's premier shisha
          destination. Nestled in the heart of [neighborhood], our cozy café
          offers an unparalleled atmosphere of relaxation and leisure. Indulge
          in our expertly crafted shisha flavors, carefully selected to
          transport your senses. Savor our delicious Middle Eastern cuisine and
          signature drinks, crafted with love and care. Our mission is to
          provide exceptional hospitality, ensuring every visit feels like a
          warm embrace. At [Café Name], we're dedicated to creating
          unforgettable moments with friends and family. Join us for an
          authentic Arabian experience, infused with modern flair. Discover the
          art of shisha, reimagined. Relax, unwind, and let the magic begin.
          Open daily from 6 PM - 2 AM. Call us: [phone number]. Visit us:
          [address]
        </p>
      </div>
      <div className="about-details-wrapper-container">
        {aboutDetailsList.map(list =>
          <div key={list.id} className="about-details-wrapper">
            <img src={list.image} alt="" />
            <div className="about-name-wrapper">
              <h2 className="number">
                0{list.id}
              </h2>
              <h2 className="name">
                {list.name}
              </h2>
            </div>
            <p>
              {list.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeWho;
