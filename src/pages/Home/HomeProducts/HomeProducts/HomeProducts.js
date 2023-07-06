import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';
import './HomeProducts.css';
import { Container } from '@mui/material';


const HomeProducts = () => {
       
    const [homeProducts, sethomeProducts] = useState([]);
    const [limit, setLimit] = useState(6);
    

    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => sethomeProducts(data))
    } ,[])


    return (
      <div className='mt-5'>
        <h2 className="text-center fw-3 text-header">
          OUR <span className="word-color">P</span>RODUCTS
        </h2>
      <Container>
        <div className="homeExplores-container">
          {homeProducts.slice(0, limit ? limit : homeProducts.length).map((homeProduct) => (
            <HomeProduct
              key={homeProduct.id}
              homeProduct={homeProduct}
              setLimit={setLimit}
            ></HomeProduct>
          ))}
        </div>
      </Container>
      </div>
    );
};

export default HomeProducts;  

                