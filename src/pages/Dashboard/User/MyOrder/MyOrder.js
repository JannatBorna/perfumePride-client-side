import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        fetch('https://desolate-sea-37549.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setMyOrder(data))
    }, [])
    return (
        <div >
            <h2>my Order: {myOrder.length}</h2>

            <Container>
                <img className="w-75" src={myOrder?.img} alt="" />
                <h4 className="name-text my-2">{myOrder?.name}</h4>
                <small className="description-text">{myOrder?.description?.slice(0, 50)}</small>
                <h6 className="price-text"><p>{myOrder?.price}</p></h6>

                {/* <Link to={`/booking/${_id}`}><button className="btn btn-secondary  my-2">Buy Now <i className="fas fa-angle-double-right"></i></button> </Link> */}

                {/* <OrderPlace
                    product={product}
                    // handleBookingClose={handleBookingClose}
                    // openBooking={openBooking}
                    // setBookingSuccess={setBookingSuccess}

                ></OrderPlace>
                 */}

            </Container>

        </div>
    );
};

export default MyOrder;