import React from 'react';
import './App.css';
import Home from'./pages/Home';
import Error from'./pages/Error';
import Rooms from'./pages/Rooms';
import SingleRoom from'./pages/SingleRoom';
import Navbar from './components/Navbar';
import {Route,Switch,  BrowserRouter as Router,} from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedRooms from './components/FeaturedRooms';


function App() {
  return (
        <div>
            <Navbar />
            <Home />
        </div>
  );
}

export default App;
