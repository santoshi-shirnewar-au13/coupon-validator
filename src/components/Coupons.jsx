import React from "react";
import Coupon from "./Coupon";
import "./Coupon.css"
export default function Coupons(props) {
    
    return (
        <div  id="cardgroup">
            {props.data.map(r => {
                return <Coupon data={r}/>
            })}
    </div>
  );
}
