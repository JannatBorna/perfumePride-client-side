import React, { useEffect, useState } from 'react';
import Product from './../Product/Product';
import './Products.css';


const Products = () => {
       
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(6);
    

    useEffect(() => {
        fetch('https://desolate-sea-37549.herokuapp.com/products')
        .then(res => res.json())
            .then(data => setProducts(data))
    } ,[])


    return (
      <div>
        <h2 className="text-center fw-3 products_header">
          <span className="word-color">
            Our <i className="fab fa-pinterest-p"></i>
          </span>
          <span className="word-color">roducts</span>
        </h2>

        <div className="products-container">
          {products.slice(0, limit ? limit : products.length).map((product) => (
            <Product
              key={product.id}
              product={product}
              setLimit={setLimit}
            ></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;  

                