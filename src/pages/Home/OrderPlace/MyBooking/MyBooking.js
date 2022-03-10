import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyBooking.css';

const MyBooking = ({ myBooking, handleDelete }) => {
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

                <br />
                    <button className="btn btn-danger my-3" onClick={() => handleDelete(myBooking._id)}>Cancel</button>

                {/* {
                    payment ? <button className="btn btn-danger my-3">Paid</button>
                    :

                        <Link to=""><button className="btn btn-danger my-3">Pay</button></Link>

                } */}

                </Container>

           
        </div>
    );
};

export default MyBooking;
            
            
            