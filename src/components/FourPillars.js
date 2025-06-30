import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './FourPillars.css';

function FourPillars() {
  const [clickedCard, setClickedCard] = useState(null);
  const fourPillarsRef = useRef(null);

  const handleCardClick = (e, cardId) => {
    e.stopPropagation(); // Prevent the document click listener from firing
    setClickedCard(clickedCard === cardId ? null : cardId);
  };

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

    if (fourPillarsRef.current) {
      observer.observe(fourPillarsRef.current);
    }

    const handleClickOutside = (event) => {
      // Only reset if a card is currently clicked and the click is not on a card
      if (clickedCard && !event.target.closest('.pillar-card')) {
        setClickedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      if (fourPillarsRef.current) {
        observer.unobserve(fourPillarsRef.current);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [clickedCard]);

  const projects = [
    {
      id: 1,
      title: 'NIT College (CPWD), Tadepalligudem, Andhra Pradesh',
      text: 'Royal Electrical provided complete electrical system solutions, including supply, installation, and commissioning. The project was delivered with strict adherence to CPWD standards and timelines.',
      imgSrc: '/images/nit-tadepalligudem.jpg',
    },
    {
      id: 2,
      title: 'Super Speciality Hospital, Mysore, Karnataka',
      text: 'This high-priority healthcare project required seamless execution of electrical infrastructure. Our team ensured safe and reliable power systems to support critical medical operations.',
      imgSrc: '/images/super-speciality-hospital-mysore.jpeg',
    },
    {
      id: 3,
      title: 'B.R. Ambedkar School of Economics, Bangalore',
      text: 'We executed comprehensive electrical works for this prestigious educational institute. The project emphasized energy efficiency and long-term reliability.',
      imgSrc: '/images/br-ambedkar-school-of-economics-bangalore.webp',
    },
    {
      id: 4,
      title: 'Light House Project, Chennai',
      text: 'Part of an affordable housing initiative, this project involved rapid and efficient electrical system deployment. Our focus was on safety, scalability, and durability.',
      imgSrc: '/images/light-house-project-chennai.jpeg',
    },
    {
      id: 5,
      title: 'NAD Quarters - AAI (CPWD) Project, Chennai',
      text: "Royal Electrical successfully managed electrical installations for the Airport Authority of India's residential quarters. Delivered with precision and in compliance with government protocols.",
      imgSrc: '/images/nad-quarters-aai-cpwd-project-chennai.jpeg',
    },
    {
      id: 6,
      title: 'NIT College (CPWD), Cuncolim, Goa',
      text: 'We carried out end-to-end electrical construction services for this NIT campus. The project highlights our commitment to quality and operational excellence in academic infrastructure.',
      imgSrc: '/images/nit-cuncolim-goa.jpeg',
    },
    {
      id: 7,
      title: 'IIT College (CPWD), Dharwad, Karnataka',
      text: 'Royal Electrical played a key role in powering this premier technical institute. Our scope covered full electrical implementation with focus on sustainability and performance.',
      imgSrc: '/images/iit-dharwad-karnataka.jpg',
    },
    {
      id: 8,
      title: 'Kumarakrupa Guest House, Bangalore',
      text: 'Royal Electrical executed high-standard electrical works for this government guest house, ensuring comfort, safety, and uninterrupted power. The project was completed with strict quality and compliance measures.',
      imgSrc: '/images/kumarakrupa-guest-house-bangalore.jpg',
    },
    {
      id: 9,
      title: 'BDA Doddabanahalli, Bangalore',
      text: 'This residential infrastructure project required efficient and scalable electrical installations. We delivered a reliable and energy-efficient system aligned with BDA specifications.',
      imgSrc: '/images/bda-doddabanahalli-bangalore.jpeg',
    },
  ];

  return (
    <section ref={fourPillarsRef} className="four-pillars-section py-5">
      <Container>
        <h2 className="text-center mb-5 four-pillars-title">OUR PROJECTS</h2>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {projects.map((project) => (
            <Col key={project.id}>
              <Card
                className={`pillar-card ${clickedCard && clickedCard !== project.id ? 'blurred' : ''} ${clickedCard === project.id ? 'active' : ''}`}
                onClick={(e) => handleCardClick(e, project.id)}
              >
                <Card.Img variant="top" src={project.imgSrc} />
                <Card.Body>
                  <Card.Title className="pillar-card-title">{project.title}</Card.Title>
                  <Card.Text className="pillar-card-text">{project.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default FourPillars;
