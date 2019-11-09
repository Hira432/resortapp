import React, { Component } from 'react';
import {FaCocktail ,FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';


class Services extends Component{
    state={
        services:[
            {
                icons:<FaCocktail/>,
                title:"free cocktail",
                info: "The power of a website comes from the people using it, not the people making it.   "
            },
            {
                icons:<FaHiking/>,
                title:"Endless Hiking",
                info: "Designing a website can be a bit like being a kid and inheriting a sweetshop. It's easy to get carried away. There are so many choices. A website can be like an attic that never fills up. Space is not the problem. Attention is.  "
            },
            {
                icons:<FaShuttleVan/>,
                title:"free shuttle",
                info: "The vast majority of small business owners want nothing to do with figuring out a website. They are neck-deep in their business trying to keep it going."
            },
            {
                icons:<FaBeer/>,
                title:"Strongest",
                info: "Don't think of your website as a self-promotion machine, think of it as a self-invention machine.  "
            },
        ]
    }
        
    render(){
        return(
            <section className="services">
            <Title title="services"/>
            <div className="services-center">
                {this.state.services.map((item,index) =>
                {
                    return ( <article key={index} className="services">
                    <span>{item.icons}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                    )
                }
                
                )}
            </div>
            </section>
        
        )
    }
}
export default Services;