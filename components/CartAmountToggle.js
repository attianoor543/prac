import React from 'react'
import {FaMinus, FaPlus } from "react-icon/fa";

const CartAmountToggle = ({amount, setDecrease, setIncrease,}) => {

  return (
    <><div className="cart-button">

        <div className= "amount-toggle"> </div>

        <button onClick={()=> setDecrease()}></button>

        <FaMinus/>
<div className="amount-style">amount</div>


        <button onClick={()=> setIncrease()}></button>
        <FaPlus/>
      </div><div>CartAmountToggle</div></>
  )
}

export default CartAmountToggle