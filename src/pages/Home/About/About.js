import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img1 from '../../../images/collection/colt-7.jpg';
import img2 from '../../../images/collection/colt-2.jpg';
import img3 from '../../../images/collection/colt-3.jpg';
import img4 from '../../../images/collection/colt-9.jpg';
import img5 from '../../../images/collection/colt-5.jpg';
import img6 from '../../../images/collection/colt-6.jpg';
import './About.css'

const About = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center fw-3">Our <span className="word-color"><i class="fab fa-cuttlefish"></i></span>ollection</h1>
            <Row lg={1} md={1} xs={1} className="g-4">
                <div className="card-align my-5">
                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img1} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Moss View Hotel <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img2} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Moss View Hotel <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img3} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Moss View Hotel <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img4} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Moss View Hotel <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img5} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Moss View Hotel <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img6} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Moss View Hotel <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>

                </div>

            </Row>
        </Container>
    );
};

export default About;