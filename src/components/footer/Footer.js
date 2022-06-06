import React from "react";

import { FaChevronRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <h3>Restaurant</h3>
                <p>
                  Busy Street <br />
                  City A, KENYA
                  <br />
                  <br />
                  <strong>Phone:</strong> +254 75589 55488 55
                  <br />
                  <strong>Email:</strong> info@restaurant.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="facebook">
                    <FaFacebook />
                  </a>
                  <a href="#" className="instagram">
                    <FaInstagram />
                  </a>
                  <a href="#" className="linkedin">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <FaChevronRight /> <a href="#">Home</a>
                </li>
                <li>
                  <FaChevronRight /> <a href="#">About us</a>
                </li>
                <li>
                  <FaChevronRight /> <a href="#">Services</a>
                </li>
                <li>
                  <FaChevronRight /> <a href="#">Terms of service</a>
                </li>
                <li>
                  <FaChevronRight /> <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <FaChevronRight /> <a href="#">Book a table</a>
                </li>
                <li>
                  <FaChevronRight /> <a href="#">Order from us</a>
                </li>
                <li>
                  <FaChevronRight /> <a href="#">Get our menu today</a>
                </li>
                <li>
                  <FaChevronRight /> <a href="#">View our services</a>
                </li>
                <li>
                  <FaChevronRight /> <a href="#">View gallery</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Join our maillist today and stay updated.</p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Restaurant</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">Samuel Njenga</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
