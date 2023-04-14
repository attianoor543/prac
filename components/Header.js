import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components"
import Nav from "./Nav"

export const Header = () => {
    return (
      <MainHeader>
  <NavLink to="/">
    <image scr="./images/logo.png" alt= "my logo img" />
  </NavLink>
  <Nav/>
      </MainHeader>
    );
  };
 // const MainHeader = styled.header
  //height: 10 rem;
  //backgroung-color: ${({theme}) => theme.colors.bg};
  //display: flex
 // justify-content: space-betweem;
 // align-items: center;
 // position: relative;bbbb
  
  //.logo { 
    //  height: 5rem
  //}
  ;
  export default App;