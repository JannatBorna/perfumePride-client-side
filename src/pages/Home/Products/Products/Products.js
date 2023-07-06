import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <Navigation />
            <Container>
                <div className="explores-container">
                    {
                        products.map(product => <Product
                            product={product}
                        ></Product>)
                    }
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Products;