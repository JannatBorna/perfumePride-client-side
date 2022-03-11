import React from 'react';
import Reviews from '../../Dashboard/User/Reviews/Reviews/Reviews';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Others from '../Others/Others';
import Products from '../Products/Products';
import Banner from './../Banner/Banner';
import './Home.css';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="products_section">
          <Products></Products>
        </div>
        <Blogs></Blogs>
        <Others></Others>
        <About></About>
        <Reviews></Reviews>
      </div>
    );
};

export default Home;