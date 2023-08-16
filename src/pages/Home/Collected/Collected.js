import React from 'react';
import { Container } from 'react-bootstrap';
import men from '../../../images/collection/men.png';
import women from '../../../images/collection/women.png';
import './Collected.css';

const Collected = () => {
    return (
        <div className='my-5'>
            <Container> 
                <div className='d-lg-flex'>
                    <div className='men mx-4'>
                        <div>
                            <h5>FRAGRANCES</h5>
                            <h2>For Men</h2>
                         </div>
                        <img src={men} alt="men_image" />
                    </div>
                    <div className='women mx-4'>
                        <div>
                            <h5>FRAGRANCES</h5>
                            <h2>For Women</h2>
                        </div>
                        <img src={women} alt="women_image" />
                    </div>
                </div>
            </Container> 
        </div>
    );
};

export default Collected;