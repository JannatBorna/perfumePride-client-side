import React from 'react';
import { Container } from 'react-bootstrap';
import blog1 from "../../../images/blog/blog-1.jpg";
import blog2 from "../../../images/blog/blog-2.jpg";
import blog3 from '../../../images/blog/blog-3.jpg';
import './Blogs.css';

const Blogs = () => {
    return (
      <Container>
        <div>
          <h2 className="text-header">
            <span className="word-color">B</span>LOGS
          </h2>
          <div className="blogs-container my-4">
            <div className='text-start'>
              <div className="blogs-img-one">
                <img src={blog1} alt="" />
              </div>
              <div className="blogs-text mt-3">
                <h4>Perfume Capital Of The World</h4>
                <h6>The hall smelled of her mother's perfume.  There <br/>were two lemon trees and I paused to enjoy their <br/>perfume.</h6>
              </div>
            </div>

            <div className='text-start'>
              <div className="blogs-img-two">
                <img src={blog2} alt="" />
              </div>
              <div className="blogs-text mt-3">
                <h4>Perfume Capital Of The World</h4>
                <h6>Flowers started to perfume the air. As they bake,  <br/> they perfume the whole house with the aroma of  <br/> apples and spices.</h6>
              </div>
            </div>

            <div className='text-start'>
              <div className="blogs-img-three">
                <img src={blog3} alt="" />
              </div>
              <div className="blogs-text mt-3">
                <h4>Perfume Capital Of The World</h4>
                <h6>It was the glove makers who first tried.Perfume is <br/>like a new dress, it makes you quite simply<br/> marvellous.</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Blogs;