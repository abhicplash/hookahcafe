import React, { useEffect, useState } from "react";
import "./HomeBest.css";
import hookha from "../../assets/icons/besthookah.png";
import { hookahImages } from "../../utils/data/shishafeatures";
// import image1 from '../../assets/hookah/10.jpg'

const HomeBest = () => {
  const [imageNumber, setImagenumber] = useState(11);
  useEffect(
    () => {
      const interval = setInterval(() => {
        if (imageNumber === 19) {
          setImagenumber(1);
        } else {
          setImagenumber(imageNumber + 1);
        }
      }, 4000);
      return () => {
        clearInterval(interval);
      };
    },
    [imageNumber]
  );
  return (
    <div className="homebest-container">
      <div className="best-wrapper">
        <div className="wrapper-right">
          {/* <img src={image1} alt="" /> */}
          {hookahImages
            .filter(item => item.id === imageNumber)
            .map((himage, index) =>
              <img src={himage.image} alt="" key={index} className="change-image" />
            )}
        </div>
        <div className="wrapper-left">
          <div className="besthead">Premier Shisha Destination</div>
          <img src={hookha} alt="hookah" />
        </div>
      </div>
    </div>
  );
};

export default HomeBest;
