import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center mt-4">
          <FaPhoneAlt
            className="icon-color icon-color-right-padding"
            fontSize="1.5em"
          />
          <span className="icon-text icon-text-right-padding">
            +1 5589 55488 55
          </span>
          <FaClock
            className="icon-color icon-color-right-padding"
            fontSize="1.52em"
          />
          <span className="icon-text"> Mon-Sat: 8AM - 10PM</span>
        </div>
        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>En</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
