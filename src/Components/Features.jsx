import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Features = () => {
  const featureData = [
    { title: "Instant Delivery", desc: "Get your order in under 10 minutes!" },
    { title: "Fresh Products", desc: "We ensure top quality and freshness." },
    { title: "Wide Variety", desc: "Groceries, snacks, and household items." },
  ];

  return (
    <section id="features" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4 fw-bold text-success">Why Blinkit?</h2>
        <Row>
          {featureData.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="shadow-sm border-0 h-100">
                <Card.Body className="text-center">
                    {/* <img src="" alt="" /> */}
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text className="text-muted mt-2">{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
