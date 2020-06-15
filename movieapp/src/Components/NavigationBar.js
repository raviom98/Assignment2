import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #777799;
  }
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: blue;

    &:hover {
      color: white;
    }
  }
`;

var logo = (
  <span class="logo">
    <a href="/">
      <img src="logo.svg" height="323" width="120" alt="LOGO" />
    </a>
  </span>
);

export const NavigationBar = () => (
  <Styles>
    <Navbar brand={logo} expand="lg" toggleNavKey={0}>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/search">Search</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/helpandsupport">Help and Support</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/register">Register!</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Feedback">Give Feedback</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
