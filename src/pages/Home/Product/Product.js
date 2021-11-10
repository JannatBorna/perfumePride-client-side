import React from 'react';
import { Container, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const { name, img, description, price } = product;
    return (
        <div className="product">
            

            <Container>
                <img className="w-75" src={img} alt="" />
                <h4 className="name-text my-2">{name}</h4>
                <small className="description-text">{description?.slice(0, 50)}</small>
                <h6 className="price-text"><p>{price}</p></h6>

                {/* <Link to={`/booking/${_id}`}><button className="btn btn-secondary  my-2">Booking Now <i className="fas fa-angle-double-right"></i></button> </Link> */}
                <Button className="btn-color my-2">Buy Now <i className="fas fa-angle-double-right"></i></Button>
            </Container>

        </div>
    );
};

export default Product;