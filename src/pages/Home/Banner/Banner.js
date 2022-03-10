import React from 'react';
import { Card } from "react-bootstrap";
// import image1 from '../../../images/banner/s-7.jpg'
// import image2 from '../../../images/banner/s-13.jpg'
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

      // <Container className="mt-2 my-4">

      //     <Carousel variant="white">
      //         <Carousel.Item>
      //             <img
      //                 className="d-block w-100 slide-img"
      //                 src={image1}
      //                 alt="First slide"
      //             />
      //             <Carousel.Caption>
      //                 <h5 className="text-color">One of the main benefits of wearing perfume is enhancing the mood</h5>

      //             </Carousel.Caption>
      //         </Carousel.Item>
      //         <Carousel.Item>
      //             <img
      //                 className="d-block w-100 slide-img"
      //                 src={image2}
      //                 alt="Second slide"
      //             />
      //             <Carousel.Caption>
      //                 <h5 className="text-color"> Perfume helps lift our spirits and reflects mood</h5>

      //             </Carousel.Caption>
      //         </Carousel.Item>
      //         <Carousel.Item>
      //             <img
      //                 className="d-block w-100 slide-img"
      //                 src={image3}
      //                 alt="Third slide"
      //             />
      //             <Carousel.Caption>
      //                 <h5 className="text-color">perfumes offer many different kinds of smells for different moods</h5>

      //             </Carousel.Caption>
      //         </Carousel.Item>
      //     </Carousel>
      // </Container>
    );
};

export default Banner;