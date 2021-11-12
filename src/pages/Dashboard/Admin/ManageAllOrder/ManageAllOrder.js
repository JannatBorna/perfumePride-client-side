import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';


const ManageAllOrder = () => {
    const [manageAllOrders, setManageAllOrders ] = useState([]);

     useEffect(() =>{
         fetch('https://desolate-sea-37549.herokuapp.com/orders')
           .then(res => res.json())
           .then(data => setManageAllOrders(data))
     },[])

    return (
        <div>
            <h2 className="mb-5">Manage All <span className="text-color later-color">Order</span> </h2>

            <Container>
                <div className="manage-products">
                    {
                        manageAllOrders.map(manageAllOrder => <div
                            key={manageAllOrder._id}>

                            <div className="manage-product">
                                <img className="w-25" src={manageAllOrder.img} alt="" />
                                <h4 className="name-text my-2">{manageAllOrder.name}</h4>
                                <small className="description-text">{manageAllOrder.description}</small>
                                <h6 className="price-text"><p>Price: {manageAllOrder.price}</p></h6>
                                {/* <button className="btn btn-secondary" onClick={() => handleDelete(manageAllOrder._id)}>Remove</button> */}
                            </div>

                        </div>)
                    }
                </div>
            </Container>

        </div>
    );
};

export default ManageAllOrder;