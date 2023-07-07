import React, { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';
import Nav from '../Nav/Nav';
import './HomeProducts.css';
import { Container } from 'react-bootstrap';


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
        <div className='mb-4'>
          <Nav />
        </div>
      <Container fluid>
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

                