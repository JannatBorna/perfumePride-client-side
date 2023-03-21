import React from 'react';
import { Container } from 'react-bootstrap';
import iconImage from '../../../images/others/employe.jpg';
import './Employe.css';


const Employe = () => {
    return (
        <div>
      <Container>
        <div>
          <h2 className="text-header">
            <span className="word-color">W</span>ORKER TEAM
          </h2>
          <div className="employe-section my-5">
            <div className="employe-text text-start">
              <h1>Our Shop History<span>&#8212;</span></h1>
                <p className="my-4">
                  The origin of perfume is commonly attributed to the ancient Egyptians. <br />  They utilized scents to celebrate prayers and religious ceremony by  <br /> burning essential oils, resin, us dream and perfumed unguents. This <br />practice functions. Perfume is a story in odour, sometimes poetry<br /> in memory
                </p>
                <h5 className="my-3">
                  History of Perfume Around the World...
                </h5>
                <a href="/seemore"><button className="employe-btn my-3">Read More</button></a>
            </div>

            <div className="employe-img">
              <h1 className='mb-5'>Work Employee</h1>
                <img src={iconImage} alt="" />
            </div>

          </div>
        </div>
      </Container>
        </div>
    );
};

export default Employe;