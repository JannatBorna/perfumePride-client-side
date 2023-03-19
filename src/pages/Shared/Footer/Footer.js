import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import {
faEnvelope, faGlobe, faPhone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";


const Footer = () => {
    return (
      <div className="footer-responsive mt-5">
        <div className="footer">
          <Container>
            <Row>
              <Col lg={4} md={4} sm={12}>
                <div className="footer-left text-start mt-4">
                  <span>
                    <i className="fab fa-pinterest-p"></i>erfumePride
                  </span>

                  <br />
                  <div className="d-flex mt-3">
                    <div className="icon-footer">
                      <FontAwesomeIcon icon={faInstagramSquare} />
                    </div>
                    <div className="icon-footer">
                      <FontAwesomeIcon icon={faTwitterSquare} />
                    </div>
                    <div className="icon-footer">
                      <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className="icon-footer">
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </div>
                  </div>
                  <p className="mt-4 text-white">
                    <small>
                      Perfume can play an important role in our wardrobe.
                      Whether you prefer timport apply your signature scent for a
                      date night or for a work day in the office, fragrances
                      help give us a certain aura and presence. Part of what
                      creates this presence for each person is the use of
                      fragrance notes.
                    </small>
                  </p>
                </div>
              </Col>

              <Col lg={4} md={4} sm={12}>
                <div className="mt-5 d-flex text-start">
                  <ul>
                    <li className="footer-menu">Theme Design</li>
                    <li className="footer-menu my-3">Html Template</li>
                    <li className="footer-menu">PSD template</li>
                    <li className="footer-menu my-3">Figma template</li>
                    <li className="footer-menu">Terms of service</li>
                    <li className="footer-menu my-3">Cookies Policy</li>
                    <li className="footer-menu">F.A.Q</li>
                  </ul>

                    <ul className="mx-4">
                      <li className="footer-menu">Home</li>
                      <li className="footer-menu my-3">Services</li>
                      <li className="footer-menu">About</li>
                      <li className="footer-menu my-3">Blogs</li>
                      <li className="footer-menu">Contact</li>
                      <li className="footer-menu my-3">Pages</li>
                      <li className="footer-menu">Single Page</li>
                    </ul>
                </div>
              </Col>

              <Col lg={4} md={4} sm={12}>
                <div className="footer-right mt-5">
                   <div className="footer-subscribe">
                      <input type="text" placeholder="Enter Email"/>
                      <button className="text-white mx-4">Subscribe</button>
                   </div>

                  <div className="d-flex mt-4 footer-icon">
                      <FontAwesomeIcon icon={faPhone} />
                      <h4 className="mx-5"><a href="tel:+0 1 7 777 000 22">+0 1 7 777 000 22</a></h4>
                  </div>

                  <div className="d-flex mt-4 footer-icon">
                      <FontAwesomeIcon icon={faGlobe} />
                      <h5 className="mx-5"><a href="https://www.perfumePride.com/">www.perfumePride.com</a></h5>
                  </div>

                  <div className="d-flex mt-4 footer-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h5 className="mx-5"><a href="mailto:perfumepride@pride.com">perfumepride@pride.com</a></h5>
                  </div>

                </div>
              </Col>
            </Row>
          </Container>
                
                <p className="mt-5 sub-footer">
                  <hr />
                  <small>PerfumePride &#169; Borna Dilruba </small>
                  <hr />
                </p>
        </div>
      </div>
    );
};


export default Footer;