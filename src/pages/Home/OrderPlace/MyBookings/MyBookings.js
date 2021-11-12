import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MyBooking from '../MyBooking/MyBooking';
import useAuth from './../../../../hooks/useAuth';
import './MyBookings.css';

const MyBookings = () => {

    const [myBookings, setMyBookings] = useState([]);


    const { user } = useAuth()


    useEffect(() => {
        fetch('https://desolate-sea-37549.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [])

    const [products, setProducts] = useState([]);
   

    useEffect(() => {
        fetch('https://desolate-sea-37549.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <h1>Hi .. {user.displayName}</h1>
            <h2 className="my-4">Your Order: {myBookings.length} items</h2>
            <div className="reviews-container">



                {
                    myBookings.map(myBooking => <MyBooking
                    
                        key={myBooking.name}
                        myBooking={myBooking}
                       
                    >

                    </MyBooking>)
                }
            </div>
        </div>
    );
};

export default MyBookings;

















