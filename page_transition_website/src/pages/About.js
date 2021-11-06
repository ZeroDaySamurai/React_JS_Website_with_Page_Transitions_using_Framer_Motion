import { motion } from 'framer-motion';
import React from 'react';
import { animationTwo, transition } from '../animation';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-2.jpg';

const About = () => {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationTwo} transition={transition}> 
           <Header />
           <Hero image={Image} title="About Page" description="Let Us Tell You More About Us" /> 
        </motion.div>
    );
};

export default About;
