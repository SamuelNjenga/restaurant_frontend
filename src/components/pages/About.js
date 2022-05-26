import React from "react";

import { FaCheckCircle } from "react-icons/fa";

import "./About.css";
const About = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="about-img">
                <img src="assets/img/about.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content about-us-section">
              <h3>About us.</h3>
              <p className="fst-italic">
                Serene and tranquil eating environment.
              </p>
              <ul>
                <li>
                  <FaCheckCircle className="about-us-section-icons" /> Friendly
                  and amazing waiters.
                </li>
                <li>
                  <FaCheckCircle className="about-us-section-icons" /> Some nice
                  background music.
                </li>
                <li>
                  <FaCheckCircle className="about-us-section-icons" /> Well
                  furnished and amazing dinner tables.
                </li>
              </ul>
              <p>Come and experience the very best of our dishes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
