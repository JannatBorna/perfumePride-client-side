import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import AddProduct from '../../Admin/AddProduct/AddProduct';
import ManageAllOrder from '../../Admin/ManageAllOrder/ManageAllOrder';
import ManageProducts from '../../Admin/ManageProducts/ManageProducts';
import DashboardHome from './../DashboardHome/DashboardHome';
import MakeAdmin from './../../Admin/MakeAdmin/MakeAdmin';
import Pay from '../../User/Pay/Pay';

import AddReview from '../../User/Reviews/AddReview/AddReview';
import useAuth from '../../../../hooks/useAuth';
import './Dashboard.css'
import MyOrder from '../../User/MyOrder/MyOrder';


const drawerWidth = 185;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to="/" className="decoration"><Button className="dash-button my-3" color="inherit">Home</Button></Link>
         <br />
            
           <Link to="/explores" className="decoration"><Button className="dash-button my-3" color="inherit">Explores</Button></Link>

            <br />

            {
                admin && <Box>
                    <Link to={`${url}/makeAdmin`} className="decoration"><Button className="dash-button my-3"  color="inherit">Make Admin</Button></Link>
                    
                    <Link to={`${url}/addProduct`} className="decoration"><Button className="dash-button my-3"  color="inherit">Add Product</Button></Link>
              
                    <Link to={`${url}/manageAllOrder`} className="decoration"><Button className="dash-button my-3"  color="inherit">Manage All Order</Button></Link>

                    <Link to={`${url}/manageProduct`} className="decoration"><Button className="dash-button my-3"  color="inherit">Manage Product</Button></Link>

                    
                </Box>
            }

            {
                !admin && <Box>
                    <Link to={`${url}/pay`} className="decoration"><Button className="dash-button my-3" color="inherit">Pay</Button></Link>
                    <br />
                    <Link to={`${url}/myOrder`} className="decoration"><Button className="dash-button my-3"  color="inherit">My Order</Button></Link>

                    <Link to={`${url}/addReview`} className="decoration"><Button className="dash-button my-3"  color="inherit">Add Reviews</Button></Link>


                    <Button onClick={logout}
                        className="btn-logout mx-2" variant="secondary">Logout
                    </Button>
                </Box>
            }
            
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} >
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                   backgroundColor: 'cadetblue',
                   color: 'Black'
                    
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>    
                    
                    <Typography>
                        {
                            admin && <Box>
                                <Button onClick={logout}
                                    className="btn-logout mx-5" variant="secondary">Logout
                                </Button>
                            </Box>
                        }

                    
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
              
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />


                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>

                    <Route path={`${path}/manageAllOrder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>

                    <Route path={`${path}/manageProduct`}>
                        <ManageProducts></ManageProducts>
                    </Route>

                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>

                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>

                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                </Switch>

     
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;

                
           
