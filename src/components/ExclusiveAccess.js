import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ExclusiveAccess.css';

function ExclusiveAccess() {
  return (
    <section className="exclusive-access-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={12} className="text-center text-lg-start">
            <h2 className="exclusive-access-title">GENERAL INFORMATION ABOUT THE COMPANY</h2>
            <p className="exclusive-access-text">
              GST No. (Maharashtra): 27ABHFR6762J1ZM<br />
              PWD License (Maharashtra): Yes<br />
              M.C. No: 10960<br />
              M.S. No: 22923<br />
              PF Registration No.: KDMAL3086153000<br />
              PAN No.: ABHFR6762J
            </p>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
}

export default ExclusiveAccess;
