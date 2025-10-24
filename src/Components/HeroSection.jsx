import React from "react";
import { Container, Button } from "react-bootstrap";

const HeroSection = () => {
  return (
    <section className="bg-light py-5 text-center">
      <Container>
        <h1 className="display-4 fw-bold text-success">Groceries delivered in minutes!</h1>
        <p className="lead text-muted mt-3">
          Fresh vegetables, fruits, and daily essentials — delivered instantly from Blinkit.
        </p>
        <Button variant="success" size="lg" className="mt-3">
          Order Now
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;
