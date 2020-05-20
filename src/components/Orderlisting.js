import React, { Component } from 'react';
import grocery  from "../assets/images/grocery_graphic.png";
import Header from "./Header.js";
import Footer from "./Footer.js";
class Orderlisting extends Component {
  constructor(props){
    super(props);
    this.state={
      curTime : new Date().toLocaleString(),
      
    }
  }
  
	render() {
		return (
			<div>
			<Header />
				<div className="main_body">
  <div className="login_screen">
    <div className="logo login_page">
      <a href="#"><img src={grocery} /></a>
    </div>
    
      <div className="user_login Select_language">
        
      <div className="form_box select_items_pdt">
        <h3>Order List</h3>
      </div>
      
      <div className="order_listing">
        <b>Date & Time: <span>{this.state.curTime}</span></b>
        <b>Item Category: <span>{localStorage.getItem("item_name")}</span></b>
        <b>Request Time: <span>{localStorage.getItem("hours")}</span></b>
        <b>Status: <span>Pending</span></b>
      </div>
    </div>
  </div>
</div>
<Footer />
			</div>
		);
	}
}

export default Orderlisting;
