import React from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';


const Hero =({children,hero}) => {
    return(
        
         <header className={hero}>{children}
                <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299"> 
              <Link to="/" className="btn-primary">
                  our rooms
              </Link> 
         </Banner>   

          </header>
    )
    
}

  Hero.defaultProps ={
      hero:"defaultHero"
  }

export default Hero;