import React from "react";
import QRCode from "react-qr-code";
import "./Coupon.css"
export default function Coupon(props) {
  const handleClick = (id)=>{
    let element = document.getElementById(id)
    let button = document.getElementById(id+'1')
    if (element.style.display === "none") {
      element.style.display = "block";
      button.innerText = "HIDE COUPON"
    } else {
      element.style.display = "none";
      button.innerText = "SHOW COUPON"
    }
  }
  return (
    <div>
      <div className="card" id="cards">
        <img className="card-img-top" src={props.data.offerImage} alt="Card image"  />
        <div className="card-body">
          <h2 className="card-title">{props.data.category}</h2>
                <div className="qrCodediv" id={props.data.code}><QRCode value={props.data.url} size={150}/></div> 
        </div>
        <button type="button" id={props.data.code +'1'} class="btn btn-primary" onClick={()=>handleClick(props.data.code)}>SHOW COUPON</button>
      </div>
    </div>
  );
}
