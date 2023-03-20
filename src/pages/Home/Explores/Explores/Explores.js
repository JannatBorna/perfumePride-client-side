import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';
import { Container } from 'react-bootstrap';
import './Explores.css';


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
            <Container>
                <div className="explores-container">
                    {
                        explores.map(explore => <Explore
                            explore={explore}
                        ></Explore>)
                    }
                </div>
            </Container>
            <Footer />
        </div>
    );
};

export default Explores;