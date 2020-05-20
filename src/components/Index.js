import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import '../assets/css/bootstrap.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/style.css';
import groocery  from "../assets/images/grocery_graphic.png";
import close  from "../assets/images/close-icon.png";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {NavLink} from 'react-router-dom';

class Index extends Component {
constructor(props) {
super(props);
this.state = {
data:[],
redirectToReferrer: false,
};
}
componentWillMount() {
if(sessionStorage.getItem("userData")){
this.getUserData();
}
else{
this.setState({redirectToReferrer: true});
}
}
getUserData() {
JSON.parse(sessionStorage.getItem("userData"));

}
render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/login'}/>)
}



return (
<div>
<Header />

<div className="main_body">
  <div className="login_screen" id="uder_eng_language">
    <div className="logo login_page">
      <a href="#"><img src={groocery} /></a>
    </div>
    
      <div className="user_login Select_language">
        
      <div className="form_box language_btn">
        <h3>Select language</h3>
        <NavLink to="/item-type">اردو</NavLink>
        <NavLink to="/item-type" className="reset_btn">English</NavLink>
      </div>
    </div>
  </div>
</div>



<Footer />



</div>


);

}
}

export default Index;