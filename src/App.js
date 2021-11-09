import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';



function App() {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route exact path="/">
               <Home />
           </Route>

          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/home">
            <Home />
          </Route>
         </Switch>
       </Router>
     </div>

         
          
  );
}

export default App;
