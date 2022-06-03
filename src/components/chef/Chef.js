import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./Chef.css";

const Chef = () => {
  return (
    <div>
      <section id="chefs" className="chefs">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Chefs</h2>
            <p>Our Proffesional Chefs</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="100">
                <img
                  src="assets/img/chefs/chefs-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Walter White</h4>
                    <span>Master Chef</span>
                  </div>
                  <div className="social">
                    <FaTwitter className="m-1 icon-hover" />
                    <FaFacebook className="m-1 icon-hover" />
                    <FaInstagram className="m-1 icon-hover" />
                    <FaLinkedin className="m-1 icon-hover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="200">
                <img
                  src="assets/img/chefs/chefs-2.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>Sarah Jhonson</h4>
                    <span>Patissier</span>
                  </div>
                  <div className="social">
                    <FaTwitter className="m-1 icon-hover" />
                    <FaFacebook className="m-1 icon-hover" />
                    <FaInstagram className="m-1 icon-hover" />
                    <FaLinkedin className="m-1 icon-hover" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="member" data-aos="zoom-in" data-aos-delay="300">
                <img
                  src="assets/img/chefs/chefs-3.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="member-info">
                  <div className="member-info-content">
                    <h4>William Anderson</h4>
                    <span>Cook</span>
                  </div>
                  <div className="social">
                    <FaTwitter className="m-1 icon-hover" />
                    <FaFacebook className="m-1 icon-hover" />
                    <FaInstagram className="m-1 icon-hover" />
                    <FaLinkedin className="m-1 icon-hover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chef;
