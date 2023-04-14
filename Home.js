import React from 'react'
import styled from 'styled-components';
import { HeroSection } from './components/HeroSection'
import { Services } from './components/Services';
import { Trusted } from './components/Trusted';
import { FeatureProduct } from './components/FeatureProduct';

const Home = () => {
  const data ={
    name:"Elite Srtore"
  }
  return <HeroSection myData= {data}/>
   (
    <>
    <FeatureProduct/>
   <Services />
    <Trusted />
  
    
    <Wrapper className="test">Home</Wrapper></>
  )
};


export default Home 