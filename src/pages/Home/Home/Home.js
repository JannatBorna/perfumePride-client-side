import React from 'react';
import Reviews from '../../Dashboard/User/Reviews/Reviews/Reviews';
import About from '../About/About';
import Products from '../Products/Products';

import Banner from './../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <About></About>
            <Reviews></Reviews>
            
          
        </div>
    );
};

export default Home;