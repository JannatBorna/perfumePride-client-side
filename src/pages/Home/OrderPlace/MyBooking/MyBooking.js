import React from 'react';
import { Container, Image } from 'react-bootstrap';
import './MyBooking.css';

const MyBooking = ({ myBooking}) => {
    const { name, img, description, price } = myBooking;
    
    
    return (
        <div className="my-booking">
                <Container>
                <Image className="w-25" src={img
} roundedCircle />
                    <h4 className="name-text my-2">{name}</h4>
                    <small className="description-text">{description}</small>
                    <br />
                    <small className="">Price: {price}</small>

                    

                </Container>

           
        </div>
    );
};

export default MyBooking;
            
            
            