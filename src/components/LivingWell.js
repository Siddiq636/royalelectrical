import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './LivingWell.css';

function LivingWell() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const livingWellRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (livingWellRef.current) {
      observer.observe(livingWellRef.current);
    }

    return () => {
      if (livingWellRef.current) {
        observer.unobserve(livingWellRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const services = [
    {
      id: 1,
      title: 'Comprehensive Services',
      text: 'Supply, installation, testing, commissioning, and maintenance of electrical systems.',
    },
    {
      id: 2,
      title: 'Quick Response',
      text: 'We aim to respond with urgency, expertise, and professionalism to minimize downtime and its frequency.',
    },
    {
      id: 3,
      title: 'Quality Workmanship',
      text: 'Committed to delivering high-quality workmanship with a focus on safety and reliability.',
    },
    {
      id: 4,
      title: 'End-to-End Project Management',
      text: 'From tendering to execution, we meticulously manage planning, procurement, and implementation.',
    },
    {
      id: 5,
      title: 'Reliable Execution',
      text: 'Every aspect is tracked and executed to ensure the successful and timely completion of projects.',
    },
  ];

  return (
    <section ref={livingWellRef} className="living-well-section py-5">
      <Container>
        <h2 className="text-center mb-5 living-well-title">OUR SERVICES</h2>
        <Row className="row-cols-1 row-cols-md-5 g-4">
          {services.map((service) => (
            <Col key={service.id}>
              <Card
                className={`living-well-card ${hoveredCard && hoveredCard !== service.id ? 'blurred' : ''}`}
                onMouseEnter={() => handleMouseEnter(service.id)}
                onMouseLeave={handleMouseLeave}
              >
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default LivingWell;
