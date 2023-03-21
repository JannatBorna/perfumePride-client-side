import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import seemore from '../../../images/others/seemore.png';
import seemore1 from '../../../images/others/seemore-2.png';

const SeeMore = () => {
    return (
        <div>
            <Navigation />
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div  className='mt-5'>
                                <img src={seemore} alt="" className='w-100'/>

                            <div className='text-start mt-5'>
                                <h2>Smell is a word, perfume is literature.</h2>
                                <p>There is something quite magical about fragrance and scent, and 
                                perfume is about so much more than smelling good. Our choice of 
                                fragrance shares a little bit of our inner self with the world, from 
                                light, floral and joyful, to intense, rich and seductive, our 
                                perfume contributes to leaving a first impression on people never 
                                met before, and that’s quite amazing. To think that something so 
                                simple as a scent, can share such intimate details about a person’s 
                                inner thoughts without uttering a single word.</p>

                                <h2 className='word-color mt-4'>Fashion Designer About Perfume</h2>
                                <p>Some of the most iconic fragrances to grace dressing tables 
                                around the world are the fragrances curated by some of the most 
                                well-known ateliers. The creative geniuses behind these legendary 
                                fashion houses have not only shared their visions for exquisite 
                                garments, but have also gone on to create perfumes and scents that 
                                are equally as pleasing to the nose as the garments are to the eyes. 
                                It should come as no surprise therefore, that some of the most 
                                memorable quotes about perfume were phrases uttered by the designers 
                                themselves – some of which have become as infamous as the designers 
                                that coined them.
                                </p>
                                </div>
                                
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className='text-start mt-5'>
                                <h2  className='word-color'>Smell is a word, perfume is literature.</h2>
                                <p>There is something quite magical about fragrance and scent, and perfume is about so much more than smelling good. Our choice of fragrance shares a little bit of our inner self with the world, from light, floral and joyful, to intense, rich and seductive, our perfume contributes to leaving a first impression on people never met before, and that’s quite amazing. To think that something so simple as a scent, can share such intimate details about a person’s inner thoughts without uttering a single word.</p>

                                <h2 className='mt-4 text-info'>Fashion Designer About Perfume</h2>
                                <p>Some of the most iconic fragrances to grace dressing tables around the world are the fragrances curated by some of the most well-known ateliers. The creative geniuses behind these legendary fashion houses have not only shared their visions for exquisite garments, but have also gone on to create perfumes and scents that are equally as pleasing to the nose as the garments are to the eyes. It should come as no surprise therefore, that some of the most memorable quotes about perfume were phrases uttered by the designers themselves – some of which have become as infamous as the designers that coined them.
                                </p>

                                <div className='mt-5'>
                                    <img src={seemore1} alt="" className='w-100 mt-4'/>
                                </div>

                            </div>
                            </Col>
                    </Row>
                </Container>

            <Footer />
        </div>
    );
};

export default SeeMore;