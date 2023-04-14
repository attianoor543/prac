import React, { useContext } from 'react'
import { HeroSection } from './components/HeroSection'

export const About = () => {

  const {myName} = useContext(AppContext);
 
    const data ={
      name:"EliteSrtore"
    }
  return (

    <>
  
  {"myName"}
  
  
  
  <HeroSection myData={data}/>;

   
    <div>About</div>
    </>
  );
};
