import React from 'react';
import { Link } from 'react-router-dom';
import './HomeExplore.css';

const HomeExplore = ({ homeExplore}) => {
    const {_id, name, img, description, price } = homeExplore;
    
    return (
        <div>
                <div className="homeExplore">
                    <img src={img} alt="" />
                    <h4 className="my-1">{name}</h4>
                    <h6>{description?.slice(0, 50)}</h6>
                    <div className='d-flex'>
                        <p className='my-1'>{price}</p>
                        <Link to={`/booking/${_id}`}>
                            <button className="explore-btn my-2">Buy Now <i className="fas fa-angle-double-right"></i></button> 
                        </Link>
                    </div>
                    
                </div>

        </div>
    );
};

export default HomeExplore;