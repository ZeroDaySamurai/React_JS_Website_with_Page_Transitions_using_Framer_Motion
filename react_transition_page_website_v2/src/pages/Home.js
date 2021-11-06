import React from 'react';

import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div>
            <Header />
            <Hero image={Image} title="Home" description="Guide for Muslim Reverts" /> 
        </div>
    )
}

export default Home;