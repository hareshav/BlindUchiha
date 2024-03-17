import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Buttons from "./Button";
import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";

function Navs({ scrolled }) {
  return (
    <Navbar
      bg={scrolled ? "rgb(14,154,154,0.5)" : "transparent"}
      variant="dark"
      expand="lg"
      fixed="top"
      className={scrolled ? "nav scrolled" : "nav"}
      style={scrolled ? {} : { width: "100%" }}
    >
      <Container className="containerr">
        {!scrolled && (
          <Navbar.Brand href="#home" className="project">
            <img src="src\styles\logoeye.png" alt="" />
            CRYPTAGE
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            style={
              scrolled
                ? {
                    paddingLeft: "0",
                    width: "50%",
                    margin: "auto",
                    color: "black !important",
                    backgroundColor: "rgb(14,154,154)",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "space-around",
                    marginLeft: "35%",
                  }
                : {}
            }
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Nav.Link
              href="#features"
              className={!scrolled ? "text-white" : "text-black"}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#pricing"
              className={!scrolled ? "text-white" : "text-black"}
            >
              Pricing
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Link to="/chatg">
        <Buttons btnname="InvestIQ"></Buttons>
      </Link>
      <br />
      <br />
      <Link to="/dash">
        <Buttons btnname="Dashboard" />
      </Link>
      <ConnectWallet />
    </Navbar>
  );
}

export default Navs;
