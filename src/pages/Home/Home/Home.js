import React from 'react';
import About from '../About/About';
import Products from '../Products/Products';

import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Products></Products>
          
        </div>
    );
};

export default Home;