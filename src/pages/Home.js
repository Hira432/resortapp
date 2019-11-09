import React from 'react';
import '../App.css';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {NavLink} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
import Button from '../components/StyledHero';
import Navbar from '../components/Navbar';

const Home=() =>{
    return(
       <>
       <Hero> </Hero>
       <Services />
       <FeaturedRooms />
       </>

    )
}
export default Home;
