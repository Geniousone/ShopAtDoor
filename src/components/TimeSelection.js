import React, { Component } from 'react';
import $ from 'jquery';
import grocery  from "../assets/images/grocery_graphic.png";
import checkbox  from "../assets/images/checkbox-icon.png";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {NavLink} from 'react-router-dom';
import {PostData} from './PostData';
import {Redirect} from 'react-router-dom';
class TimeSelection extends Component {

constructor(props) {
super(props);
this.state = {
data:[],
redirectToReferrer: false,
hours:''
};
      this.refresh = this.refresh.bind(this);
      this.onChange = this.onChange.bind(this);
}
  componentDidMount = () =>{
    $(".request_door_click").on('click', function(){
    });
    $(".request_door_click").click(function(){
  $(".process_complete").hide();
});
    $(".request_door_click").click(function(){
  $(".last_step").show();
});
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
  onChange(e){
this.setState({[e.target.name]:e.target.value});

}
refresh() {
        
  
    }
render() {
  localStorage.setItem('hours', this.state.hours);
if (this.state.redirectToReferrer) {
return (<Redirect to={'/login'}/>)
}
		return (
<div>
<Header />	
<div className="main_body">
  <div className="login_screen">
    <div className="logo login_page">
      <a href="#"><img src={grocery} /></a>
    </div>
    
      <div className="user_login Select_language process_complete">
        
      <div className="form_box ">
        <h3>Time selecttion</h3>
      </div>
      <div className="custom-control custom-radio">
          <input type="radio" id="row_default_1" name="hours" className="custom-control-input" value="Now" onChange={this.onChange} />
           <label htmlFor="row_default_1" className="custom-control-label gj-cursor-pointer"> Now</label>
        </div>
        <div className="custom-control custom-radio">
          <input type="radio" id="row_default_2" name="hours" className="custom-control-input" value="1 Hour" onChange={this.onChange} />
           <label htmlFor="row_default_2" className="custom-control-label gj-cursor-pointer"> 1 hours</label>
        </div>
        <div className="custom-control custom-radio">
          <input type="radio" id="row_default_3" name="hours" className="custom-control-input" value="3 Hours" onChange={this.onChange} />
           <label htmlFor="row_default_3" className="custom-control-label gj-cursor-pointer"> 3 hours</label>
        </div>
      <div className="htmlForm_box Request_door" id="request_door">
        <NavLink to="/order-listing" className="request_door_click" onClick={this.refresh}>Request shop at door</NavLink>
      </div>
    </div>
    <div className="last_step">
      <img src={checkbox} />
      <b>Thank You</b>
    </div>
  </div>
</div>
<Footer/>
</div>
		);
	}
}
export default TimeSelection;