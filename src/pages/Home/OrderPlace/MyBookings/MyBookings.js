import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MyBooking from '../MyBooking/MyBooking';
import useAuth from './../../../../hooks/useAuth';
import swal from 'sweetalert';
import './MyBookings.css';

const MyBookings = () => {

    const [myBookings, setMyBookings] = useState([]);


    const { user } = useAuth()


    useEffect(() => {
        fetch('https://perfumepride-server-side.onrender.com/orders')
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [])

    const [products, setProducts] = useState([]);
   

    useEffect(() => {
        fetch('https://perfumepride-server-side.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    const handleDelete = id => {
        const url = `https://perfumepride-server-side.onrender.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    
                    swal({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this imaginary file!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                        .then((willDelete) => {
                            if (willDelete) {
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
                                });
                            } else {
                                swal("Your imaginary file is safe!");
                            }
                        });
                    const remaining = myBookings.filter(myBookings => myBookings._id !== id);
                    setMyBookings(remaining);
                }

            })
    }


 return (
        <div>
         <h1><span className="color-hi"><i className="fas fa-heading"></i><span className="color-text">ello...</span></span> <span className="color-length">{user.displayName}</span></h1>
         <br />
         <h2 className="my-4"><span className="color-text">Your Order: </span><span className="color-length">{myBookings.length}</span> <span className="color-text">items</span></h2>
            <div className="reviews-container">



                {
                    myBookings.map(myBooking => <MyBooking
                    
                        key={myBooking.name}
                        myBooking={myBooking}
                        handleDelete={handleDelete}
                        products={products}
                    >

                    </MyBooking>)
                }
            </div>
        </div>
    );
};

export default MyBookings;
