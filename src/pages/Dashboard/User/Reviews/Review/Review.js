
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Rating from 'react-rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Review.css'



const Review = ({ review }) => {
    const { name, img, description, rating } = review;
    return (
        <div className="review">


            <Container>
                <Image className="w-25" src={img} roundedCircle />
                <h4 className="name-text my-2">{name}</h4>
                <small className="description-text">{description?.slice(0, 50)}</small>
                <Rating
                className="text-danger"
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>

               

                {/* <OrderPlace
                    product={product}
                    // handleBookingClose={handleBookingClose}
                    // openBooking={openBooking}
                    // setBookingSuccess={setBookingSuccess}

                ></OrderPlace>
                 */}

            </Container>

        </div>
    );
};

export default Review;