import React from 'react';
import { Container } from 'react-bootstrap';
import iconImage from '../../../images/about/about-5.jpg';
import './About.css';


const About = () => {
    return (
      <Container>
        <div>
          <h2 className="text_header">
            <span className="word_color">A</span>BOUT US
          </h2>
          <div className="about_section my-5">
            <div>
              <h2 className="shop_history">Our Shop History</h2>
              <div>
                <p className="my-4">
                  The origin of perfume is commonly attributed to the ancient
                  <br /> Egyptians. They utilized scents to celebrate prayers
                  <br /> and religious ceremony by burning essential <br />
                  oils, resin, and perfumed unguents. This <br /> practice had
                  several functions.
                </p>
                <h5 className="my-3" s>
                  History of Perfume Around the World
                </h5>
                <button className="about_button my-3">Read More</button>
              </div>
            </div>

            <div>
              <h2>Our Employee</h2>
              <div className="my-4">
                <img className="w-75" src={iconImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default About;  
                  
                  
               