import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Review from './../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    
    
    useEffect(() => {

        fetch('https://desolate-sea-37549.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])



    return (
        <div>
            <h2 className="text-center fw-3"><i className="fab fa-resolving"></i>eviews</h2>


            <div className="reviews-container">

                {
                    reviews.map(review => <Review
                        key={review.name}
                        review={review}
                     
                    ></Review>)
                }


            </div>
        </div>
    );
};

export default Reviews;   

