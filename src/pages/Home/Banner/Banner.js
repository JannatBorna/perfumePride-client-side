import React from 'react';
import { Card } from "react-bootstrap";
import image3 from '../../../images/banner/b-4.jpg';
import './Banner.css';

const Banner = () => {
    return (
      <div>
        {/* <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 1,
            borderColor: "#000000",
          }}
        /> */}
        <div className="banner_section">
          <Card className="text-white">
            <Card.Img className="banner_image" src={image3} alt="Card image" />
            <Card.ImgOverlay>
              <p className="banner_text">
                <span className="go_text"> PERFUME</span>   WEBSITE
              </p>
              <h6 className='text-dark'>NO BOTTLES TO BREAK – JUST HEARTS</h6>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    );
};

export default Banner;