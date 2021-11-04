import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/img-1.jpg';

const Home = () => {
    return (
        <>
           <Header />
           <Hero image={Image} title="Home Page" description="Let Us Start Here" /> 
        </>
    )
} 

export default Home
