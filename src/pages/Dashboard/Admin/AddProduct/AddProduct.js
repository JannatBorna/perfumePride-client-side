import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'


const AddProduct = () => {
    
    const { register } = useForm();
    
    const nameRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    


    const handleUser = e => {
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;


        const newUser = { name, img, description, price };

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
                    alert('Product Add Successfully!')


                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <div className="add-review">
                <h2>Add Product</h2>

                <form onSubmit={handleUser}>
                    <input type="text" placeholder="Product Name" ref={nameRef} />
                    <input {...register("img")} placeholder="image url" ref={imgRef} />
                    <textarea {...register("description")} placeholder="description" ref={descriptionRef} />
                    <br />
                    <input type="number" {...register(" price")} placeholder="Product Price" ref={priceRef}/>
                    <input className="btn btn-secondary" type="submit" value="Add Now" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;

            


               

                    

                    
          

                


            