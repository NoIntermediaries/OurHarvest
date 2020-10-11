import React from 'react';
import './Home.css';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';

function Home() {
    return (
        <div className="home">
            <Hero />
            <Features />
            <Footer />
        </div>
    );
}

export default Home;