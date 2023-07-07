import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Nav = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div>
                        <h4> <a href="0"><GoArrowLeft /></a> FEATURED PRODUCTS <a href="0"><GoArrowRight /></a></h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Nav;