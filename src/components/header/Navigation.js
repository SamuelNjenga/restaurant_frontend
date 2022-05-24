import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import "./Navigation.css";

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (just like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <div className="navbar-div">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        style={{
          padding: scrollY > 40 ? "10px 10px" : "20px 10px",
          transition: "0.4s",
        }}
      >
        <Container>
          <Link to="campaign-site" style={{ textDecoration: "none" }}>
            {" "}
            <Navbar.Brand className="campaign-text campaign-blinking-text">
              Restaurant
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler"
          >
            <span>
              <FaBars className="bi bi-list mobile-nav-toggle" />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={1} className="nav-link-class" href="#service">
                HOME
              </Nav.Link>
              <Nav.Link eventKey={2} href="#about" className="nav-link-class">
                ABOUT
              </Nav.Link>
              <Nav.Link className="nav-link-class" eventKey={3} href="#menu">
                MENU
              </Nav.Link>
              <Nav.Link
                href="#specials"
                className="nav-link-class"
                eventKey={4}
              >
                SPECIALS
              </Nav.Link>
              <Nav.Link href="#chefs" className="nav-link-class" eventKey={5}>
                CHEFS
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link-class" eventKey={6}>
                CONTACT
              </Nav.Link>
              <Nav.Link
                href="#book-a-table"
                className="nav-link-class"
                eventKey={7}
              >
                BOOK A TABLE
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
