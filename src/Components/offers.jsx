import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Offers = () => {
  const offers = [
    {
      title: "Get 50% Off on Fruits & Veggies 🍎",
      img: "https://ik.imagekit.io/blinkit/fruits-vegetables.webp",
      desc: "Fresh, organic, and delivered within 10 minutes!",
    },
    {
      title: "Snacks & Drinks Bonanza 🥤",
      img: "https://ik.imagekit.io/blinkit/snacks-drinks.webp",
      desc: "Stock up your kitchen with great deals on snacks!",
    },
    {
      title: "Household Essentials 🧽",
      img: "https://ik.imagekit.io/blinkit/household.webp",
      desc: "Get your cleaning and daily use products instantly.",
    },
  ];

  return (
    <section id="offers" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold text-success">
          Trending Offers 🔥
        </h2>
        <Row>
          {offers.map((offer, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{offer.title}</Card.Title>
                  <Card.Text className="text-muted mt-2">{offer.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Offers;
