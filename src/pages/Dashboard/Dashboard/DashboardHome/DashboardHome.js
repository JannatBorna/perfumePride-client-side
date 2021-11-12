import { Box } from '@mui/system';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import admin1 from '../../../../images/admin.jpg'
import user1 from '../../../../images/user.png'
import './DashboardHome.css'


const DashboardHome = () => {
    const {admin, user} = useAuth();
    return (
        <div>
          
            
            {
                admin && <Box>
                    <h2 >Welcome to Admin Dashboard ~~ <span className="display-name">{user.displayName}</span></h2>
                    <img src={admin1} alt="" />
                </Box>
            }
            
            {
                !admin && <Box>
                    <h2>Welcome to user Dashboard ~~ <span className="display-name">{user.displayName}</span></h2>
                    <img src={user1} alt="" />
                </Box>
            }

            
        </div>
    );
};

export default DashboardHome;