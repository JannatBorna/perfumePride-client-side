import React from 'react';
import admin from '../../../../images/admin.jpg'


const DashboardHome = () => {
    return (
        <div>
            <h2 className="text-danger">Welcome to Admin Page....</h2>
            <img src={admin} alt="" />
            
            
        </div>
    );
};

export default DashboardHome;