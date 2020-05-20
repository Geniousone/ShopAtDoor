import React, { Component } from 'react';
import grocery  from "../assets/images/grocery_graphic.png";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {PostData} from './PostData.js';

class Login extends Component {
	constructor(){
super();
this.state = {
username: '',
email: '',
redirectToReferrer: false
};
this.login = this.login.bind(this);
this.onChange = this.onChange.bind(this);
}
login() {
if(this.state.email && this.state.password){
PostData('login',this.state).then((result) => {
let responseJson = result;
if(responseJson.userData){
sessionStorage.setItem('userData',JSON.stringify(responseJson));
this.setState({redirectToReferrer: true});
}
else
alert(result.error);
});
}
}
onChange(e){
this.setState({[e.target.name]:e.target.value});
}
render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/time-selection'}/>)
}
		return (
<div>
<Header />	

<div className="main_body">
  <div className="login_screen">
    <div className="logo login_page">
      <a href="#"><img src={grocery} /></a>
    </div>
    <form action="" method="">
    <div className="user_login">
      
      <div className="form_box">
        <input type="text" placeholder="Mobile Number Or Email Address" required="required" name="email" onChange={this.onChange} />
        <svg width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M512 64q39 0 80.5 15.5t72.5 39 51 52 20 53.5v160q0 57-24 127t-71 106q-8 7-14 16.5t-8.5 20T617 675q5 36 37 51l279 132 2 .5 4 1.5 5 3 5.5 4.5 5 6.5 3.5 10 1 13v62l-895 1v-65q0-25 27-37l281-133q32-15 36.5-50.5T385 617q-46-37-71.5-107.5T288 384V224q0-33 33-70.5T407 90t105-26zm0-64q-69 0-136.5 33.5t-109.5 86T224 224v160q0 65 30.5 149.5T345 667L64 800q-3 1-7 3t-15 9-19.5 14T7 843.5 0 863v97q0 26 18.5 44.5T64 1023h896q26 0 44.5-18.5T1023 960v-97q0-10-6.5-20.5t-16-18T982 811t-16-9l-6-2-279-133q60-47 89.5-130T800 384V224q0-39-25.5-79.5T709 72t-93-52T512 0z" fill="#626262"/></svg>
      </div>
      <div className="form_box">
        <input type="password" placeholder="Password" required="required" name="password" onChange={this.onChange} />
        <svg width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 832 1024"><path d="M704 384h-32V262q0-111-72.5-186.5T415 0q-74 0-133 35.5t-90.5 95T160 262v122h-32q-53 0-90.5 37.5T0 512v384q0 53 37.5 90.5T128 1024h576q53 0 90.5-37.5T832 896V512q0-53-37.5-90.5T704 384zM224 262q0-84 53-141t138-57 139 56.5T608 262v122H224V262zm544 634q0 17-8.5 32T736 951.5t-32 8.5H128q-26 0-45-19t-19-45V512q0-26 19-45t45-19h576q26 0 45 19t19 45v384zM416 576q-27 0-45.5 18.5T352 640q0 36 32 55v105q0 13 9.5 22.5T416 832t22.5-9.5T448 800V695q32-19 32-55 0-27-18.5-45.5T416 576z" fill="#626262"/></svg>
      </div>
      
      <div className="form_box" id="login_items">
        <p>New User ? <NavLink to="/signup">Sign Up</NavLink></p>
        <button type="button" onClick={this.login}>Login</button>
      </div>
    </div>
  </form>
  </div>
</div>
<Footer/>
</div>
		);
	}
}
export default Login;