import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-success text-white py-3 mt-5">
      <Container className="text-center">
        <p className="mb-0">© {new Date().getFullYear()} Blinkit — All Rights Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;
