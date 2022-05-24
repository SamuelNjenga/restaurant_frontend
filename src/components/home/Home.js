import React from "react";

import "./Home.css";
const Home = () => {
  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1>
                Welcome to our <span>Restaurant</span>
              </h1>
              <h2>Delivering great food for more than 18 years!</h2>
              <div class="btns">
                <a
                  href="#menu"
                  class="btn-menu animated fadeInUp scrollto no-text-decoration"
                >
                  Our Menu
                </a>
                <a
                  href="#book-a-table"
                  class="btn-book animated fadeInUp scrollto no-text-decoration"
                >
                  Book a Table
                </a>
              </div>
            </div>
            <div
              class="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <a
                href="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
                class="glightbox play-btn"
              ></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
