import React from 'react';
import { Carousel, Col, Container, Row } from "react-bootstrap";
import img1 from '../../../images/banner/slid-1.png';
import img2 from '../../../images/banner/slid-2.png';
import img3 from '../../../images/banner/slid-3.png';
import image1 from '../../../images/banner/1.png';
import image2 from '../../../images/banner/2.png';
import image3 from '../../../images/banner/3.png';
import image4 from '../../../images/banner/4.png';
import image5 from '../../../images/banner/5.png';

import './Banner.css';

const Banner = () => {
    return (
      <section className='banner'>
        <Container>
        <Row>
          <Col lg="3" md="3" sm="12">
            <div className='left-bn'>
              <div className='banner-item'>
                <img src={image1} alt="" />
                <a href="7">NEW ARRIVALS</a>
              </div>
              <div className='banner-item'>
                <img src={image2} alt="" />
                <a href="7">FRAGRANCES</a>
              </div>

              <div className='banner-item'>
                <img src={image3} alt="" />
                <a href="7">PERFUME SETS</a>
              </div>

              <div className='banner-item'>
                <img src={image4} alt="" />
                 <a href="7">BATH & BODY</a>
              </div>

              <div className='banner-item'>
                <img src={image5} alt="" />
                 <a href="7">EID SPECIAL OFFER</a>
              </div>                           
            </div>
          </Col>
          <Col lg="9" md="9" sm="12">
            <div className="right-bn">
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img className="slid" src={img1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="slid"  src={img2}  alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="slid"  src={img3}  alt="Third slide" />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
    
</Container>
      </section>
    );
};

export default Banner;