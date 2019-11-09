import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from'../pages/Home';
import Error from'../pages/Error';
import Rooms from'../pages/Rooms';
class Navbar extends Component{

    state={
        isOpen: false
    }
    handleToggle=() => {
        this.setState({isOpen: true})
    }
    render(){
        return(
        <Router>
          <div>
           <nav className="navbar">
             <div className="nav-center">
               <div className="nav-header">
                 <Link to="/">
                      <img src={logo} alt="Beach Resort" />
                 </Link>
                 <button
                  type="button"
                  className="nav-btn"
                  onClick={this.handleToggle}>
                  <FaAlignRight className="nav-icon" />
                  </button>
               </div>
               <ul className={this.state.isOpen?"nav-links show-nav": "nav-links"}>
                 <li>
                    <Link to="/home">Home</Link>
                 </li>
                 <li>
                    <Link to="/rooms">Rooms</Link>
                </li>
              </ul>
             </div>
           </nav>
           <Switch>
              <Route path="/home">
                  <Home />
              </Route>
              <Route path="/rooms">
                  <Rooms />
              </Route>
              <Route>
                  <Error />
              </Route>
           </Switch>
          </div>
        </Router>
  )
  }
}
export default Navbar;
