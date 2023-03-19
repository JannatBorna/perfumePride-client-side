import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard/Dashboard';
import Reviews from './pages/Dashboard/User/Reviews/Reviews/Reviews';
import About from './pages/Home/About/About';
import Banner from './pages/Home/Banner/Banner';
// import Booking from './pages/Home/Booking/Booking';
import Explores from './pages/Home/Explores/Explores/Explores';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/Home/NotFound/NotFound';
import Products from './pages/Home/HomeExplores/HomeExplores/HomeExplores';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Login/Register/Register';




function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Router>
          {/* <Navigation /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/About">
              <About />
            </Route>

            <Route exact path="/banner">
              <Banner />
            </Route>

            <Route exact path="/products">
              <Products />
            </Route>

            <Route exact path="/explores">
              <Explores />
            </Route>

            <Route exact path="/reviews">
              <Reviews />
            </Route>

            <Route exact path="/products">
              <Products />
            </Route>

            {/* <PrivateRoute path="/booking/:productId"> */}
              {/* <Booking /> */}
            {/* </PrivateRoute> */}

            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>


            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>
           
            

            <Route exact path="*">
              <NotFound />
            </Route>


          </Switch>
          {/* <Footer /> */}
        </Router>
       </AuthProvider>
     </div>

         
          
  );
}

export default App;
