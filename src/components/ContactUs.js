import React, { Component } from 'react';
import grocery  from "../assets/images/grocery_graphic.png";
import logoimg  from "../assets/images/shopdot-contact.png";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {NavLink} from 'react-router-dom';
import {PostData} from './PostData';
import {Redirect} from 'react-router-dom';
class ContactUs extends Component {



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
        <h3>Contact Us</h3>
      </div>
      <div className="user_login Select_language contact_info">
      <div className="form_box select_items_pdt">
        <img src={logoimg} alt="" />
        <h4>GET IN TOUCH</h4>
        <h3>Visit one of our locations or contact us today</h3>
      </div>
      <div className="form_row">
        <label>Head Office</label>
        <ul>
          <li><i aria-hidden="true" className="fa fa-map-marker"></i> 329, Street 103, I-8/4, Islamabad</li>
          <li><i aria-hidden="true" className="fa fa-envelope"></i> <a href="mailto:contact@shopatdoor.pk">contact@shopatdoor.pk</a></li>
          <li><i aria-hidden="true" className="fa fa-phone"></i>  <a href="tel:+92 03 111 150 150">+92 03 111 150 150</a></li>
          <li><i aria-hidden="true" className="fa fa-clock-o"></i> Monday to Saturday: 9:00 AM to 6:30 PM</li>
        </ul>
      </div>
      
    </div>
      
    </div>
  </div>
</div>
<Footer/>
</div>
		);
	}
}
export default ContactUs;