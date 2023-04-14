import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import{Button} from "../styles/Button";

export const HeroSection = ({myData}) => {
const {name} = myData;
return <wrapper>
<div className='container'>
    <div className='grid grid-two-column'>
        <div className='hero-section-data'>
            <p className='intro-data'>Welcome to</p>
            <h1>EliteStore</h1>
            <p>
            involving a higher level of responsibility than I have, and therefore something that should be dealt with by someone more senior than me. This expression is often used figuratively to say that you do not have the knowledge or authority to decide about something
            </p>
            <NavLink>
                <Button>
                    ShopNow
                </Button>
            </NavLink>

        </div>
{/*our homapage image*/}
<div className='hero-section-image'>
<figure>
    <img scr="image/hero.jpg"alt="hero-section-photo" 
     className='image-style'/>
</figure>
</div>
    </div>

</div>
  </wrapper>
};
 