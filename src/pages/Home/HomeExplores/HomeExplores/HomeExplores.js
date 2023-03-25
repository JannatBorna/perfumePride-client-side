import React, { useEffect, useState } from 'react';
import HomeExplore from '../HomeExplore/HomeExplore';
import './HomeExplores.css';
import { Container } from '@mui/material';


const HomeExplores = () => {
       
    const [homeExplores, sethomeExplores] = useState([]);
    const [limit, setLimit] = useState(6);
    

    useEffect(() => {
        fetch('https://perfumepride-server-side.onrender.com/products')
        .then(res => res.json())
        .then(data => sethomeExplores(data))
    } ,[])


    return (
      <div className='mt-5'>
        <h2 className="text-center fw-3 text-header">
          OUR <span className="word-color">P</span>RODUCTS
        </h2>
      <Container>
        <div className="homeExplores-container">
          {homeExplores.slice(0, limit ? limit : homeExplores.length).map((homeExplore) => (
            <HomeExplore
              key={homeExplore.id}
              homeExplore={homeExplore}
              setLimit={setLimit}
            ></HomeExplore>
          ))}
        </div>
      </Container>
      </div>
    );
};

export default HomeExplores;  

                