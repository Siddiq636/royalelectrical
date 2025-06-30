import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './HealthyHabits.css';

function Counter({ endValue, label, triggerAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggerAnimation) {
      setCount(0); // Reset count when animation is not triggered
      return;
    }

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start < endValue) {
        setCount(Math.ceil(start));
      } else {
        setCount(endValue);
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [endValue, triggerAnimation]);

  return (
    <div className="counter-item text-center">
      <h3 className="counter-number">{count}+</h3>
      <p className="counter-label">{label}</p>
    </div>
  );
}

function HealthyHabits() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="healthy-habits-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="d-flex justify-content-around align-items-center">
            <Counter endValue={30} label="Completed Projects" triggerAnimation={isVisible} />
            <Counter endValue={5} label="Current Projects" triggerAnimation={isVisible} />
            <Counter endValue={15} label="Works in Different Cities" triggerAnimation={isVisible} />
          </Col>
          <Col lg={6} className="text-center text-lg-start">
            <h2 className="healthy-habits-title">Achievements</h2>
            <p className="healthy-habits-text">
              Royal Electrical has successfully executed major electrical works across prestigious institutions and government projects nationwide. From IITs and NITs to hospitals and housing initiatives, our portfolio reflects technical expertise and reliability. Each project showcases our commitment to quality, safety, and timely delivery. With decades of experience, we’ve earned the trust of top clients in both public and private sectors.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HealthyHabits;
