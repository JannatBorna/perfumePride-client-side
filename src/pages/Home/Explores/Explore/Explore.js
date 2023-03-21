import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';


const Explore = ({ explore }) => {

    const { _id, name, img, description, price } = explore;
    
    return (
        <div className="explore my-5">
            <img  src={img} alt="" />
            <h4 className="my-2">{name}</h4>
            <h6>{description?.slice(0, 100)}</h6>
                <div className='d-flex'>
                    <p className='my-1'>{price}</p>
                    <Link to={`/booking/${_id}`}>
                        <button className="explore-btn my-2">Buy Now <i className="fas fa-angle-double-right"></i></button> 
                    </Link>
                </div>

        </div>
    );
};

export default Explore;