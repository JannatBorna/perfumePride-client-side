import React, { useEffect, useState } from 'react';
import './Explores.css'
import Explore from '../Explore/Explore';


const Explores = () => {
    const [explores, setExplores] = useState([]);

    useEffect(() => {
        fetch('./product.json')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])

    return (
        <div>
            <h2 className="text-center fw-3">Our <span className="word-color"><i className="fab fa-pinterest-p"></i></span>roducts</h2>


            <div className="explores-container">

                {
                    explores.map(explore => <Explore
                        explore={explore}
                        


                    ></Explore>)
                }


            </div>
        </div>
    );
};

export default Explores;