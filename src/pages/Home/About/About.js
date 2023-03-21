import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about1 from '../../../images/about/about-1.png';
import about2 from '../../../images/about/about-2.png';
import about3 from '../../../images/about/about-3.png';
import about4 from '../../../images/about/about-4.png';
import about5 from '../../../images/about/about-5.png';
import about6 from '../../../images/about/about-6.png';
import about7 from '../../../images/about/about-7.png';
import about8 from '../../../images/about/about-8.png';
import about9 from '../../../images/about/about-9.png';
import aboutsec1 from '../../../images/about/about-sec-1.png';
import aboutsec2 from '../../../images/about/about-sec-2.png';
import aboutsec3 from '../../../images/about/about-sec-3.png';
import aboutsec4 from '../../../images/about/about-sec-4.png';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './About.css';


const About = () => {
    return (
      <div>
        <Navigation />
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <div className='about-1 mt-5'>
              <img src={about1} alt="" />
            </div>

            <div className='about-2 mt-3'>
              <img src={about2} alt="" />
            </div>

            <div className='about-3'>
              <img src={about3} alt="" />
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div className='adout-mid mt-5'>
              <h2><span>Hi...</span> I'M Corlo</h2>
              <p>A perfumer typically describes the 'accord' of a fragrance using a 'fragrance triangle' <b>(top, heart, base)</b>. This classifies the ingredients they have used in a perfume, according to their volatility and perception: Top notes are the most volatile and base notes the least.Power and Control. Perfume is, at its heart, a novel about power. It explores how people obtain power, and then how they keep it or fail at doing so. A combination of religion and bureaucracy is introduced as the first avenue through which an individual can enjoy power.</p>
              <p>“The beauty of fragrance is that it speaks to your heart, and hopefully someone else's.” – Elizabeth Taylor. “Ladies, a man will never remember your handbag, but he will <b>remember your perfume</b>.” – Olivier Creed. “Good manners and good cologne is what transforms the man into a gentleman!”- Tom Ford.The hall smelled of her mother's perfume. There were two lemon trees and I paused to enjoy their perfume. Flowers started to perfume the air. As they bake, they <strong>perfume the whole house</strong> with the aroma of apples and spices.</p>

              <p>A good perfume not just provides fragrance but also enhances your mood. There are several benefits of using perfumes. It may boost your confidence, make you attractive, act as an aphrodisiac <strong>(a substance that arouses sexual desire),</strong> control your stress levels, and treat insomnia and headache.Perfume is definitely a feel-good stimulant that can relax you, improve the mood, make you feel sexy and act as a confidence booster. Perfume is also known to evoke certain associations. Having a scent memory can be quite special as it helps to remember things you actually want to remember.</p>
            </div>
          </Col>

          <Col lg={4} md={4} sm={12}>
            <div className='about-right mt-5'>
              <div>
                <img src={about4} alt="" />
                <p className='mt-3'><a href="/">SEE MORE</a></p>
              </div>
          
              <div>
                <img src={about5} alt="" />
                <p className='mt-3'><a href="/">SEE MORE</a></p>
              </div>

              <div>
                <img src={about6} alt="" />
                <p className='mt-3'><a href="/">SEE MORE</a></p>
              </div>

              <div>
                <img src={about7} alt="" />
                <p className='mt-3'><a href="/">SEE MORE</a></p>
              </div>

              <div>
                <img src={about8} alt="" />
                <p className='mt-3'><a href="/">SEE MORE</a></p>
              </div>

              <div>
                <img src={about9} alt="" />
                <p className='mt-3'><a href="/">SEE MORE</a></p>
              </div>
            </div>
          </Col>
        </Row>

        <div className='aboutsec mt-2'>
          <div className='aboutsec1'>
            <img src={aboutsec1} alt="" className='mt-5 p-5'/>
          </div>

          <div className='aboutsec2'>
            <div>
              <img src={aboutsec2} alt=""/>
              <p>In the special case of products with relevant olfactory impact —perfumes, cosmetics, households, air fresheners.</p>
              <a href="/">SEE MORE</a>
            </div>
            <div>
              <img src={aboutsec3} alt=""/>
              <p>Transmission of requirements is a very delicate step, in which people with strongly different competences.</p>
              <a href="/">SEE MORE</a>
            </div>
            <div>
              <img src={aboutsec4} alt=""/>
              <p>As famous perfumer Olivier Creed once said, be remembered, but your perfume will. There’s even a word for it.</p>
              <a href="/">SEE MORE</a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
    );
};

export default About;  
                  
                  
               