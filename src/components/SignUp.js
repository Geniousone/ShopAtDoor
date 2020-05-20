import React, { Component } from 'react';
import grocery  from "../assets/images/grocery_graphic.png";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {PostData} from './PostData.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class SignUp extends Component {
constructor(props){
super(props);
this.state = {
mobile: '',
email: '',
password: '',
city: '',
redirectToReferrer: false

};
this.signup = this.signup.bind(this);
this.onChange = this.onChange.bind(this);
}

signup() {
if(this.state.mobile && this.state.email && this.state.password && this.state.city){
PostData('signup',this.state).then((result) => {
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
if (this.state.redirectToReferrer || sessionStorage.getItem('userData')) {
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
    <form action="" method="" id="Register_box">
    <div className="user_login">
      
      <div className="form_box">
        <input type="text" placeholder="Mobile number" name="mobile" onChange={this.onChange} />

        <svg focusable="false" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1008 1008"><path d="M246 37q57 78 134 200 19 32-6 79-8 16-48 89 8 12 18.5 25t22.5 27.5 26 29.5 29.5 31.5T455 552q88 88 146 130 65-38 89-50 25-14 48-14 18 0 31 8 89 54 202 134 20 16 24 42 3 27-17 58-8 12-31 40-21 26-63.5 66t-69.5 40h-2q-103-4-229-81T307 699Q8 399 0 194q0-27 40-71 39-42 65-63 26-20 42-31 21-15 49-15 32 0 50 23zm-64 41q-39 28-76 65-36 36-42 53 8 180 287.5 459T812 944q15-6 51-43t65-77q3-4 4-7.5t0-6.5q-115-80-194-130-8 0-20 6-4 2-32 18t-55 30l-33 20-33-22q-63-43-155-137-90-91-135-155l-24-31 20-35q37-67 48-87 6-12 6-20-34-54-66-102.5T198 74h-2q-8 0-14 4z" fill="#626262"></path></svg>
      </div>
      <div className="form_box">
        <input type="text" placeholder="Enter Your Email" name="email" onChange={this.onChange} />
        <svg width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M1023 473q0-4-1-8t-2.5-8-3.5-7.5-5-6.5l-1-1q-2-3-5-6l-6-6L582 27Q555 0 514 0t-68 27L29 427q-6 6-12 13T5.5 458.5 0 481v479q0 27 19 45.5t45 18.5h896q17 0 32-8.5t23.5-23.5 8.5-32V478l-1-5zM270 726L64 916V545zm66 27l6-6 1-1 141-130q11-9 25-9t24 8l384 345H110zm421-22l203-180v362zM104 443L491 72q10-9 23-9t23 9l361 345h-1l55 55-242 215-136-121q-18-15-41-20t-47 0-43 21L317 683 75 469l27-26h2z" fill="#626262"/></svg>
      </div>
      <div className="form_box">
        <input type="password" placeholder="Password" name="password" onChange={this.onChange} />
       <svg  width="20" height="20" viewBox="0 0 24 24"><path d="M17 9.761v-4.761c0-2.761-2.238-5-5-5-2.763 0-5 2.239-5 5v4.761c-1.827 1.466-3 3.714-3 6.239 0 4.418 3.582 8 8 8s8-3.582 8-8c0-2.525-1.173-4.773-3-6.239zm-8-4.761c0-1.654 1.346-3 3-3s3 1.346 3 3v3.587c-.927-.376-1.938-.587-3-.587s-2.073.211-3 .587v-3.587zm3 17c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm2-6c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z"/></svg>
      </div>
      <div className="form_box">
        <input type="text" placeholder="Address City name" name="city" onChange={this.onChange} />
       <svg focusable="false" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 768 1024"><path d="M388 0q-78 0-149.5 31.5t-123.5 84T31.5 240 0 390q0 44 12 92t28 89 46 91 53.5 84.5 63.5 84 62 75.5 62 72q12 14 18 20 2 3 7 7.5t18 11.5 25 7h3q28 0 50-26 320-368 320-608 0-167-102-277Q560 0 388 0zm12 955q-1 2-4 4l-4-4-17-19q-38-44-59-68.5T257 796t-60-79.5-51-79-44.5-84-26.5-81T64 390q0-87 44-162.5T226.5 108 388 64q79 0 141 27.5t99.5 74.5T685 270t19 120q0 216-304 565zm-15-762q-31 0-60.5 10t-53 27.5T230 272t-27.5 53-9.5 60q0 80 56.5 136t136 56T521 521t56-136q0-39-15-74.5t-41-61-61.5-41T385 193zm0 320q-53 0-91-38t-38-91 37.5-90.5T384 256t90.5 37.5T512 384q0 66-53 105-33 24-74 24z" fill="#626262"></path></svg>
      </div>
      <div className="form_box" id="login_items">
        <button type="button" onClick={this.signup}>Register</button>
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

export default GoogleApiWrapper({
  apiKey: ('AIzaSyASITGxv2lK06QVJkNgoTKm8fE_upn5VB8')
})(SignUp)