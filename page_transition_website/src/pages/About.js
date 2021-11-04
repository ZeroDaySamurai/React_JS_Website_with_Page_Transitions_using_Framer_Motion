import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-2.jpg';

const About = () => {
    return (
        <>
           <Header />
           <Hero image={Image} title="About Page" description="Let Us Tell You More About Us" /> 
        </>
    );
};

export default About;
