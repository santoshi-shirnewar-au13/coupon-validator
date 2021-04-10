import React, { Component } from "react";
import Home from "./Home"
import Login from "./Login"
class Main extends Component {
  state = {
    user: {
      name: "user",
      auth: false,
    },
    coupons: [],
  };
  
  componentDidMount() {
    let url = "http://localhost:3004/coupons";
      fetch(url).then(res => res.json()).then(data => {
          let coupons = data.map(coupon => {
              return coupon
          })
          this.setState({
              coupons:coupons
          })
      })
    console.log(this.state.coupons)
    
      
    }
    callbackFunction = (name) => {
      this.setState({
        user:{
          name:name,
          auth:true
        }
      })
    }
    
    render() {     
      // let check = this.state.user.auth?<Home/>:<Login/>   
      const isAuth = this.state.user.auth ? <Home data={this.state.coupons} name={this.state.user.name} />:<Login parentCallback = {this.callbackFunction}/>
      return (
        <div>
          {isAuth}
        </div>
      )
    
  }
}
export default Main;