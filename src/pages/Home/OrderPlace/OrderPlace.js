import React, { useRef } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './OrderPlace.css'

const OrderPlace = () => {
    const { user } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://desolate-sea-37549.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[])

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const serviceRef = useRef();
    const priceRef = useRef();

    const handleUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const service = serviceRef.current.value;
        const price = priceRef.current.value;

        const newUser = { name, email, address, service, price };

        fetch('https://desolate-sea-37549.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Place Order.')
                    e.target.reset();
                }
            })
        e.preventDefault();

        
    }


    return (
        <div>
            <div className="add-product">
                <h2>place Order</h2>

                <form onSubmit={handleUser}>
                    <input type="text" placeholder="Name" ref={nameRef} value={user?.displayName} />
                    <input type="email" placeholder="Email" ref={emailRef} value={user?.email} />
                    <input type="address" placeholder="Your Address" ref={addressRef} />
                    <input type="Phone" placeholder="Phone no." ref={addressRef} />
                    <input type="product name" placeholder="Product Name" ref={serviceRef} value={product.name}/>
                    <input type="price" placeholder="Price" ref={priceRef} value={product.price}/>
                    <input className="btn btn-secondary" type="submit" value="Purchase now" />
                </form>

            </div>
        </div>
    );
};

export default OrderPlace;
                    