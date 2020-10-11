import React from 'react';
import './Home.css';
import Features from './Features';
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <h1 className="title">Veggis had never been so fresh</h1>
            <p className="subtitle">Our Harvest will show you your closest farm where you can get fresh and bio veggetables direct from the field</p>
            <Features />
            <Footer />            
       </div> 
    );
  }
  
  export default Home;