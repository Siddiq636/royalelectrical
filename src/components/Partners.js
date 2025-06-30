import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Partners.css';

function Partners() {
  const projectNames = [
    'NIT College (CPWD)',
    'Super Speciality Hospital',
    'B.R. Ambedkar School of Economics',
    'Light House Project',
    'NAD Quarters - AAI (CPWD) Project',
    'NIT College (CPWD)',
    'IIT College (CPWD)',
    'BDA KENGERI PROJECT',
    'BDA DODDABANAHALLI PROJECT',
    'JUDICIAL QUARTERS(KPWD)',
    'TNHB RESIDENTAIAL QUARTERS PROJECT',
    'KUMARAKRUPA GUEST HOUSE',
    'GOVT. ENGINEERING COLLEGE, KOPPAL',
    'DISTRICT COLLECTOR OFFICE(KPWD)',
    'BDA KANIMINIKE',
  ];

  // Duplicate the list for seamless looping
  const duplicatedProjectNames = [...projectNames, ...projectNames];

  return (
    <section className="partners-section py-5">
      <Container>
        <h2 className="text-center mb-5 partners-title">Completed Projects</h2>
        <div className="projects-carousel-container">
          <div className="projects-carousel-track">
            {duplicatedProjectNames.map((name, index) => (
              <div key={index} className="project-name-item-wrapper">
                <h3 className="project-name-item">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Partners;
