import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/Home/About/About';
import Banner from './pages/Home/Banner/Banner';
import Explore from './pages/Home/Explore/Explore';
import Reviews from './pages/Dashboard/User/Reviews/Reviews';
import NotFound from './pages/Home/NotFound/NotFound';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard/Dashboard';
import Products from './pages/Home/Products/Products';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Router>
          <Navigation />
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

            <Route exact path="/explore">
              <Explore />
            </Route>

            <Route exact path="/reviews">
              <Reviews />
            </Route>

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
          <Footer />
        </Router>
       </AuthProvider>
     </div>

         
          
  );
}

export default App;
