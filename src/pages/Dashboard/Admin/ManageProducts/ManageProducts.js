import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './ManageProducts.css'
import swal from 'sweetalert';


const ManageProducts = () => {
    const [manageProducts, setManageProducts ] = useState([]);

     useEffect(() => {
         fetch('https://perfumepride-server-side.onrender.com/products')
            .then(res => res.json())
            .then(data => setManageProducts(data))
     }, [])


    const handleDelete = id => {
        const url = `https://perfumepride-server-side.onrender.com/products/${id}`
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
                            } 
                        });
                    const remaining = manageProducts.filter(manageProduct => manageProduct._id !== id);
                    setManageProducts(remaining);
                }

            })
    }




    return (
        <div>
            <h2 className="mb-5">Manage <span className="text-color later-color"><span className="color-product">P</span>roducts</span> </h2>
            
     <Container>
               <div className="manage-products">
                    {
                        manageProducts.map(manageProduct => <div
                            key={manageProduct._id}>

                            <div className="manage-product">
                                <img className="w-25" src={manageProduct.img} alt="" />
                                <h4 className="name-text my-2">{manageProduct.name}</h4>
                                <small className="description-text">{manageProduct.description}</small>
                                <h6 className="price-text"><p>Price: {manageProduct.price}</p></h6>
                                <button className="btn btn-secondary" onClick={() => handleDelete(manageProduct._id)}>Remove</button>
                            </div>

                        </div>)
                    }
               </div>
            </Container>

        </div>
    );
};

export default ManageProducts;