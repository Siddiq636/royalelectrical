import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About() {
  const aboutRef = useRef(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section ref={aboutRef} className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={12}>
            <h2 className="about-title">About ROYAL ELECTRICAL</h2>
            <p className="about-text">
              Royal Electricals has been providing electrical services since 1992 and places great emphasis on
              our relationship with clients and pride ourselves on the ability to respond to our client’s need in an
              efficient and cost-effective way.
              Royal Electricals delivers high quality construction and maintenance outcomes for a wide range of
              clients. Our trained electricians are capable of resolving the most complex electrical issues and
              have built a solid reputation of successfully delivering premier electrical contracting and
              maintenance solutions for public sectors and private customers in residential, commercial and
              industrial markets.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
