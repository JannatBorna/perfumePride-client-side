import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product}) => {
    const {_id, name, img, description, price } = product;
    

    return (
        <div className="product">
            

            <Container>
                <img className="product_image my-2" src={img} alt="" />
                <h4 className="name-text my-2">{name}</h4>
                <small className="description-text">{description?.slice(0, 50)}</small>
                <h6 className="price-text"><p>{price}</p></h6>

                <Link to={`/booking/${_id}`}><button className="product_button my-2">Buy Now <i className="fas fa-angle-double-right"></i></button> </Link>
                 
            </Container>

        </div>
    );
};

export default Product;