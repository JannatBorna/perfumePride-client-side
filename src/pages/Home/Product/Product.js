import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyOrder from '../../Dashboard/User/MyOrder/MyOrder';
import OrderPlace from '../OrderPlace/OrderPlace';
// import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product}) => {
    const {_id, name, img, description, price } = product;
    const [openBooking, setBookingOpen] = React.useState(false);

    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <div className="product">
            

            <Container>
                <img className="w-75" src={img} alt="" />
                <h4 className="name-text my-2">{name}</h4>
                <small className="description-text">{description?.slice(0, 50)}</small>
                <h6 className="price-text"><p>{price}</p></h6>

                <Link to={`/booking/${_id}`}><button className="btn btn-secondary  my-2">Buy Now <i className="fas fa-angle-double-right"></i></button> </Link>

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

export default Product;