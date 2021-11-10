import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Banner.css'
import image1 from '../../../images/banner/s-7.jpg'
import image2 from '../../../images/banner/s-13.jpg'
import image3 from '../../../images/banner/s-6.jpg'

const Banner = () => {
    return (
        <Container className="mt-2 my-4">


            <Carousel variant="white">
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 className="text-color">One of the main benefits of wearing perfume is enhancing the mood</h5>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5 className="text-color"> Perfume helps lift our spirits and reflects mood</h5>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 slide-img"
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5 className="text-color">perfumes offer many different kinds of smells for different moods</h5>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;