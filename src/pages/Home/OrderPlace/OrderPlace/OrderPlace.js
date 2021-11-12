import React, { useRef } from 'react';
import useAuth from './../../../../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import './OrderPlace.css'


const OrderPlace = () => {
    const { user } = useAuth();
    const { register } = useForm();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://desolate-sea-37549.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    
    const nameRef = useRef();
    const imgRef = useRef();
    const addressRef = useRef();
    const PhoneNumberRef = useRef();
    const productsRef = useRef();
    const priceRef = useRef();
    const descriptionRef = useRef();


    const handleUser = e => {
        
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const address = addressRef.current.value;
        const phoneNumber = PhoneNumberRef.current.value;
        const products = productsRef.current.value;
        const price = priceRef.current.value;
        const description = descriptionRef.current.value;
       

        const newUser = { phoneNumber, address, products,name,img, price, description };

        fetch('https://desolate-sea-37549.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "Order Place Successfully!", "success");
                    e.target.reset();
                    
                }
            })
        e.preventDefault();


    }


    return (
        <div> 
            <h2 className="my-4">place Order</h2>
            
               
            <div className="order-product">        
                <form onSubmit={handleUser}>
                   
                    <input type="text" placeholder="Name"  value={user?.displayName} />
                    <input type="email" placeholder="Email"  value={user?.email} />
                    <input type="product name" placeholder="Product Name" ref={productsRef} value={product?.name} />
                    <input type="name" placeholder="Product Name" ref={nameRef} value={product?.name} />
                    <input type="img" placeholder="Product img" ref={imgRef} value={product?.img} />
                    <input type="price" placeholder="Price" ref={priceRef} value={product?.price} />
                    
                    <textarea {...register("description")} placeholder="description" ref={descriptionRef} value={product?.description}/>
                    <br />
                    <input type="address" placeholder="Your Address" ref={addressRef} />
                    <input type="Phone" placeholder="Phone no." ref={PhoneNumberRef} />
                    <input className="btn btn-secondary" type="submit" value="Order Place" />
                </form>



              


            </div>
        </div>
    );
};

export default OrderPlace;

