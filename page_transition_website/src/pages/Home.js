import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/img-1.jpg';
import { motion } from "framer-motion";
import { animationOne, transition, } from '../animation';

const Home = () => {
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationOne} transition={transition}>
           <Header />
           <Hero image={Image} title="Home Page" description="Let Us Start Here" /> 
        </motion.div>
    )
} 

export default Home
