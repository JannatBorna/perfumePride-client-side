import React from 'react';
import About from '../About/About';
import Products from '../Products/Products';

import Banner from './../Banner/Banner';
import Reviews from '../../Dashboard/User/Reviews/Reviews';

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