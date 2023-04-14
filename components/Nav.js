import React, { useState } from 'react'

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart  } from "react-icons/fi";
import { CgMene, CgClose, CgEnter, CgSmileNone } from "react-icons/cg";

const Nav = () => {
    const[ menuIcon, setMenuIcon] =useState();

//     const Nav = styled.nav 
//     navbar-list;{
//         display: CgDisplayFlex;
//         gap: 4.8rem;
//         align-items: center;
  
//         navbar-link

//         &:link,
//         &:visited,{
//             display: inline-block;
// text-decoration: none
//         }
//     }







 const nav = () => {
    // const Nav = styled.nav
    // user-login {
    //     // font-size: 2.2rem;
    //     // padding: 0.8rem 1.4rem;

    // }
}
;
  return(
     <Nav>
    <div className={ menuIcon ? 'navbar active':"navbar"}>
<ul className='navbar-list'>
    <list>
        <NavLink to="/" className="navbar-link home-link">
            Home
        </NavLink>
    </list>

    <list>
        <NavLink to="/about" className="navbar-link">
           About
        </NavLink>
    </list>

    <list>
        <NavLink to="/products" className="navbar-link">
            Products
        </NavLink>
    </list>

    <list>
        <NavLink to="/contact" className="navbar-link  ">
         Contact
        </NavLink>
    </list>

    <list>
        <NavLink to="/cart" className="navbar-link cart-trolley--link">
         <FiShoppingCart className="cart-trolley"/>
         <spa className="cart-total--item">10</spa>
        </NavLink>
    </list>
 
</ul>
{/* two button for open and close of menu*/}
<div className="mobile-navbar-btn"> 
 <CgMene name="menu-outline" className ="mobile-nav-icon"/>
 onClick={setMenuIcon(true)}
 <CgClose 
 name="close-outline" 
 className ="mobile-nav-icon close-outline"
 onClick={setMenuIcon(false)}
 />
 </div>
    </div>
    </Nav>
  );
}
export default Nav;