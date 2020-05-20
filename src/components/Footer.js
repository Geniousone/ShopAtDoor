import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import '../assets/css/bootstrap.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/style.css';
import order  from "../assets/images/order.png";
import contact  from "../assets/images/contact.png";
import whatsapp  from "../assets/images/whatsapp.png";
import share  from "../assets/images/Share.png";
import {NavLink} from 'react-router-dom';
class Footer extends Component {

  constructor(props){
    super(props);
  }

  


render() {


return (
<div>
<div className="bottom_bar">
    <ul>
      <li>
        <a href="#">
          <img src={order} />
        <b>order</b>
        </a>
      </li>
      <li>
        <NavLink to="/contact-us">
          <img src={contact} />
        <b>contact</b>
        </NavLink>
      </li>
      <li>
        <a href="#">
          <img src={whatsapp} />
        <b>whats app</b>
        </a>
      </li>
      <li>
        <a href="#">
          <img src={share} />
        <b>Share</b>
        </a>
      </li>
    </ul>
    </div>



</div>


);

}
}

export default Footer;