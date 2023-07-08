import React from 'react';
import p1 from '../../../images/products/perfume-1.png';
import p2 from '../../../images/products/perfume-2.png';
import p3 from '../../../images/products/perfume-3.png';
import p4 from '../../../images/products/perfume-4.png';
import p5 from '../../../images/products/perfume-5.png';
import p6 from '../../../images/products/perfume-6.png';
import p7 from '../../../images/products/perfume-7.png';
import p8 from '../../../images/products/perfume-8.png';
import p9 from '../../../images/products/perfume-9.png';
import p10 from '../../../images/products/perfume-10.png';
import p11 from '../../../images/products/perfume-11.png';
import p12 from '../../../images/products/perfume-12.png';
import Whirligig from 'react-whirligig';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import './Slider.css';

const Slider = () => {

  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()


  return (
    <div className='mt-5'>
      <button onClick={prev} className='slid-btn'><IoIosArrowDropleft /></button> FEATURED PRODUCTS <button onClick={next} className='slid-btn'><IoIosArrowDropright /></button>
      <Whirligig
        className='mt-5'
        visibleSlides={6}
        gutter="1em"
        ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
      >
        <div className='slider'>
          <img src={p1} alt='...'/>
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p2} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p3} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p4} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p5} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p6} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p7} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p8} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p9} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p10} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p11} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

        <div className='slider'>
          <img src={p12} alt='...' />
          <h6>Gianni Versace</h6>
        </div>

      </Whirligig>
    </div>
  )
}

export default Slider;