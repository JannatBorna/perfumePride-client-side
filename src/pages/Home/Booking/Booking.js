import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import OrderPlace from '../OrderPlace/OrderPlace/OrderPlace';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import './Booking.css';

const Booking = () => {
    const { productId } = useParams();
    const [ product, setProduct ] = useState({});

    useEffect(() => {
        fetch(`https://perfumepride-server-side.onrender.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [productId])

    


    return (
          <div>
            <Navigation />
            <h2 className="my-5">Your Booking <span className="word-color"><i className="fab fa-pinterest-p"></i></span>roduct<span></span> </h2>
             
                <Container>
                    <Row>
                    <div className=" booking">
                        <Col className="booking-card ">
                                <h6><span className="dote-design">Booking Id:</span> {productId}</h6>
                                <div className=" dote-design">
                                    --------------------------------
                                    <h2>Details of</h2>
                                </div>
                                <img className="w-25" src={product.img} alt="" />
                                <h4 className="name-text">{product.name}</h4>
                                <small className="description-text">{product.description}</small>
                                <h6 className="price-text"><p>{product.price}</p></h6>

                            </Col>

                            <div>
                              <OrderPlace></OrderPlace>
                            </div>
                    </div>
                    </Row>
                </Container>
                <Footer />
            </div>
    );
};

export default Booking;