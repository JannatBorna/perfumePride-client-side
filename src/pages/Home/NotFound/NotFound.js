import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../../images/others/404.png';
import './NotFound.css';

const NotFound = () => {
    return (
        <Col>
            <div className="container not-found">
                <img src={notfound} alt="" />
                <h1>Page Not Found - S<i className="fas fa-sad-tear"></i>RRY</h1>
                <Link to="/"><button className="btn-notfound my-5"><i className="fas fa-arrow-left"></i> Go Back</button></Link>

            </div>
        </Col>
    );
};

export default NotFound;