import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="wellifize-footer py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="footer-logo">ROYAL ELECTRICAL</h3>
            <p className="footer-text">
              &copy; {new Date().getFullYear()} ROYAL ELECTRICAL. All rights reserved.
            </p>
          </Col>
          <Col md={8}>
            <h5 className="footer-heading">Company Name: ROYAL ELECTRICALS</h5>
            <p className="footer-text">
              Established: 1992<br />
              Company Type: Government Licensed Electrical Contractor<br />
              Turnover (2023–24): ₹36 Crores
            </p>
            <h5 className="footer-heading mt-4">Registered Office:</h5>
            <p className="footer-text">
              Shop No. 70, Level II,<br />
              Deewan Center,<br />
              S.V. Road, Jogeshwari (West),<br />
              Mumbai – 400102<br />
              Maharashtra, India
            </p>
            <h5 className="footer-heading mt-4">Owner: Mohammed Akbar Hussain</h5>
            <h5 className="footer-heading mt-4">Contact Numbers:</h5>
            <p className="footer-text">
              +91 92214 36574<br />
              +91 80997 77788
            </p>
            <h5 className="footer-heading mt-4">Email:</h5>
            <p className="footer-text">
              royalelectricals1992@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
