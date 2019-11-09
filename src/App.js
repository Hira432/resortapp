import React from 'react';
import './App.css';
import Home from'./pages/Home';
import Error from'./pages/Error';
import Rooms from'./pages/Rooms';
import SingleRoom from'./pages/SingleRoom';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedRooms from './components/FeaturedRooms';


function App() {
  return (
        <div>
             <Navbar>
              
                  <Switch>
                    <Route exactPath="/" component={Home}/>
                     <Route exactPath="/rooms" component={Rooms}/>
                     <Route exactPath="/single-room:slug" component={SingleRoom}/>
                     <Route  component={Error}/>
                     
                 </Switch>
           </Navbar>
           <Hero> </Hero>
           <Services></Services>
          <FeaturedRooms></FeaturedRooms>
         
          
        </div>
  );
}

export default App;
