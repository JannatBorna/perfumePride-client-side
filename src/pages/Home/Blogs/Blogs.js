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
          <h2 className="text_header">
            <span className="word_color">O</span>UR BLOGS
          </h2>
          <div className="blogs_container my-4">
            <div>
              <div>
                <img className="blog_one" src={blog1} alt="" />
              </div>
              <div>
                <h6>Perfume Capital Of The World</h6>
                <h5>It was the glove makers who first tried</h5>
              </div>
            </div>

            <div>
              <div>
                <img className="blog_two" src={blog2} alt="" />
              </div>
              <div>
                <h6>Perfume Capital Of The World</h6>
                <h5>It was the glove makers who first tried</h5>
              </div>
            </div>

            <div>
              <div>
                <img className="blog_three" src={blog3} alt="" />
              </div>
              <div>
                <h6>Perfume Capital Of The World</h6>
                <h5>It was the glove makers who first tried</h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Blogs;