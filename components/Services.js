import styled from "styled-components";
import {TbTruckDelivery} from "react-icon/tb";
import {MdSecurity } from "react-icon/tb";
import {GiReceiveMoney} from "react-icon/gi";
import {RiSecurePaymentLine } from "react-icon/Ri";

export const Services = () => {
  return (
    <>
    <wrapper>
        <div className="grid grif-three-column">
<div className="services-1">
    <div>
        <TbTruckDelivery  className ="icon"/> 
        <h3>
            Super Fast and Free Delivery
        </h3>
    </div>
    <div className="services-2">
        <div className="services-column-2">
        <div className="services-column-2">
            <div>
                <MdSecurity  className ="icon"/>
                <h3>Non-Contact Shipping</h3>
            </div>
            <div className="services-column-2"></div>
<GiReceiveMoney className ="icon"/>
<h3>Money-Back-Guranted</h3>
</div>
        </div>
    </div>
    <div className="services-3">
        <div>
        <RiSecurePaymentLine  className ="icon"/>
                <h3>Super-Secure-Payment-System</h3>
        </div>
    </div>

</div>
        </div>

      </wrapper>
      <div>Services</div></>
  )
};

export default Services;
