import React, { useState } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [view, setView] = useState(false);

  return (
    <div className="navbarcontainer">
      <Link to={"/"}>
        <h1>Hookha</h1>
      </Link>
      <HiOutlineBars2
        className="icon"
        onClick={() => {
          setView(!view);
        }}
      />
      <div className="listdesk">
        <Link to={"/"}><span>Home</span> </Link>
        <Link to={"/contact"}>Contact us</Link>
      </div>
      {view
        ? <div className="listmob">
            <div className="submenu">
              <Link to={"/"}>Home</Link>
            </div>
            <div className="submenu">
              <Link to={"/contact"}>Contact Us</Link>
            </div>
          </div>
        : null}
    </div>
  );
};

export default Navbar;
