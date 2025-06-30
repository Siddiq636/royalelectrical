import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={12} className="text-center text-lg-start">
            <h1 className="hero-title">Built on Power.<br />Driven by Precision</h1>
            <p className="hero-subtitle">
              <span className="animated-line" style={{ animationDelay: '0.5s' }}>Since 1992, Royal Electrical has been a trusted name in electrical construction, delivering high-quality solutions with unmatched expertise.</span><br />
              <span className="animated-line" style={{ animationDelay: '0.7s' }}>With over three decades of experience, we bring precision, safety, and innovation to every project.</span><br />
              <span className="animated-line" style={{ animationDelay: '0.9s' }}>Our long-standing reputation is built on reliability, craftsmanship, and client trust.</span><br />
              <span className="animated-line" style={{ animationDelay: '1.1s' }}>At Royal Electrical, power isn't just what we build — it's what drives us forward.</span>
            </p>
          </Col>
        </Row>
      </Container>
      </section>
  );
}

export default Hero;
