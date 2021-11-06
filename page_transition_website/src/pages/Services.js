import { motion } from 'framer-motion';
import React from 'react';
import { animationThree, transition } from '../animation';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Image from '../images/img-3.jpg';

const Services = () => {
    return (
      <motion.div initial="out" animate="end" exit="out" variants={animationThree} transition={transition}>
        <Header />
        <Hero image={Image} title="Services Page" description="What Do We Offer?" /> 
      </motion.div>
    );
};

export default Services;
