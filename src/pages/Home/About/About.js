import React from 'react';
import { Container, Row } from 'react-bootstrap';
import img1 from '../../../images/collection/colt-7.png';
import img2 from '../../../images/collection/colt-2.png';
import img3 from '../../../images/collection/colt-3.png';
import img4 from '../../../images/collection/colt-9.png';
import img5 from '../../../images/collection/colt-5.png';
import img6 from '../../../images/collection/colt-6.png';
import './About.css'

const About = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center fw-3"><span className="word-color"></span>Our Others <i class="fab fa-cuttlefish"></i>ollection</h1>
            <Row lg={1} md={1} xs={1} className="g-4">
                <div className="card-align my-5">
                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img1} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Roses Vanilla <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img2} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i>Instant Crush <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img3} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Black Gold <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>
                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img4} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Coco Vanilla <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img5} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Velvet Vanilla <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>

                    <div className="card w-100 border-0 shadow" >
                        <div className="inner">
                            <img src={img6} className="card-img-top" alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="card-title text-center">
                                <h4 className="product-text"><i className="fas fa-window-minimize"></i> Lemon Line <i className="fas fa-window-minimize"></i></h4>
                            </div>
                        </div>
                    </div>

                </div>

            </Row>
        </Container>
    );
};

export default About;