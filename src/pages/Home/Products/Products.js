import React, { useEffect, useState } from 'react';
import './Products.css'
import Product from './../Product/Product';
import { Alert } from '@mui/material';

const Products = () => {
       
    const [products, setProducts] = useState([]);
    const [bookingSuccess, setBookingSuccess] = useState(false);

    useEffect(() => {
        fetch('https://desolate-sea-37549.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])


    return (
        <div>
            <h2 className="text-center fw-3">Our <span className="word-color"><i className="fab fa-pinterest-p"></i></span>roducts</h2>
 

            <div className="products-container">

               {
                   products.map(product => <Product
                       key={product.id}
                       product={product}
                       setBookingSuccess={setBookingSuccess}
                   

                      
                   ></Product>)
               }


            </div>
        </div>
    );
};

export default Products;