import React, { useEffect, useState } from 'react';
import './Explores.css'
import Explore from '../Explore/Explore';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';


const Explores = () => {
    const [explores, setExplores] = useState([]);

    useEffect(() => {
        fetch('./product.json')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])

    return (
        <div>
            <Navigation />
            <div className="explores-container">

                {
                    explores.map(explore => <Explore
                        explore={explore}
                        


                    ></Explore>)
                }


            </div>
            <Footer />
        </div>
    );
};

export default Explores;