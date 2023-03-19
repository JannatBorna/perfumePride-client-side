import React from 'react';
import { Container } from 'react-bootstrap';
import iconImage from '../../../images/about/about-5.jpg';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './About.css';


const About = () => {
    return (
      <div>
        <Navigation />
      <Container>
        <div>
          <h2>About us</h2>
        </div>
      </Container>
      <Footer />
    </div>
    );
};

export default About;  
                  
                  
               