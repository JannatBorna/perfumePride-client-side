import React from 'react';
import { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyOrder = ({ product }) => {
    const [myOrder, setMyOrder] = useState({});
    const { user } = useAuth();
    

    useEffect(() => {
        const url = `https://desolate-sea-37549.herokuapp.com/users?email=${user.email}`

        fetch(url)
        .then(res => res.json())
        .then(data => setMyOrder(data))
        
    },[user.email])

    return (
        <div>
            <h2>My order: </h2>
        </div>
    );
};

export default MyOrder;