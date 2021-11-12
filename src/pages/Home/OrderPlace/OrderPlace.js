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
    }, [])

    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const productsRef = useRef();
    const priceRef = useRef();

    const handleUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const products = productsRef.current.value;
        const price = priceRef.current.value;

        const newUser = { name, email, address, products, price };

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
                    <input type="product name" placeholder="Product Name" ref={productsRef} value={product?.name} />
                    <input type="price" placeholder="Price" ref={priceRef} value={product?.price} />
                    <input className="btn btn-secondary" type="submit" value="Order Place" />
                </form>



              


            </div>
        </div>
    );
};

export default OrderPlace;





































// import React, { useState } from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import useAuth from './../../../hooks/useAuth';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };
// // import './OrderPlace.css'

// const OrderPlace = ({ product, openBooking, handleBookingClose, setBookingSuccess}) => {
//     const { name, img, price } = product;
//     const { user } = useAuth();
//     const initialInfo = { Name: user.displayName, email: user.email, phone: '' }
//     const [bookingInfo, setBookingInfo] = useState(initialInfo);
//     // const { productId } = useParams();
//     // const [product, setProduct] = useState({});
//     const handleOnBlur = e => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const newInfo = { ...bookingInfo };
//         newInfo[field] = value;
//         setBookingInfo(newInfo);
//     }

//     const handleBookingSubmit = e => {
//         // collect data
//         const bookingProduct = {
//             ...bookingInfo,
//             productName: name,
            
//         }

    
//         fetch(`https://desolate-sea-37549.herokuapp.com/products`,{
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(bookingProduct)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.insertedId) {
//                     setBookingSuccess(true);
//                     handleBookingClose();
//                 }
//             });

//         e.preventDefault();
//     }

        
   
    

       

//     return (
//         <Modal
//             aria-labelledby="transition-modal-title"
//             aria-describedby="transition-modal-description"
//             open={openBooking}
//             onClose={handleBookingClose}
//             closeAfterTransition
//             BackdropComponent={Backdrop}
//             BackdropProps={{
//                 timeout: 500,
//             }}
//         >
//             <Fade in={openBooking}>
//                 <Box sx={style}>
//                     <Typography id="transition-modal-title" variant="h6" component="h2">
//                         {name}
//                     </Typography>
//                     <form onSubmit={handleBookingSubmit}>
//                         <TextField
//                             disabled
//                             sx={{ width: '90%', m: 1 }}
//                             id="outlined-size-small"
                            
//                             size="small"
//                         />
//                         <TextField
//                             sx={{ width: '90%', m: 1 }}
//                             id="outlined-size-small"
//                             name="patientName"
//                             onBlur={handleOnBlur}
//                             defaultValue={user.displayName}
//                             size="small"
//                         />
//                         <TextField
//                             sx={{ width: '90%', m: 1 }}
//                             id="outlined-size-small"
//                             name="email"
//                             onBlur={handleOnBlur}
//                             defaultValue={user.email}
//                             size="small"
//                         />
//                         <TextField
//                             sx={{ width: '90%', m: 1 }}
//                             id="outlined-size-small"
//                             name="phone"
//                             onBlur={handleOnBlur}
//                             defaultValue="Phone Number"
//                             size="small"
//                         />
                        
//                         <Button type="submit" variant="contained">Submit</Button>
//                     </form>
//                 </Box>
//             </Fade>
//         </Modal>
//     );
// };

// export default OrderPlace;
                    