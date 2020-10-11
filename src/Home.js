import React from 'react';
import './Home.css';
import Hero from './Hero';
import Features from './Features';

function Home() {
    return (
        <div className="home">
            <Hero />
            <Features />
        </div>
    );
}

export default Home;