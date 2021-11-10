import React from 'react';
import About from '../About/About';
import Products from '../Products/Products';

import Banner from './../Banner/Banner';
import Reviews from './../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Reviews></Reviews>
          
        </div>
    );
};

export default Home;