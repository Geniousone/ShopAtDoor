import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import '../assets/css/bootstrap.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/style.css';
import good  from "../assets/images/good-1.gif";
import bars  from "../assets/images/bars_icons.png";
import close  from "../assets/images/close-icon.png";
import {NavLink} from 'react-router-dom';
class Header extends Component {


constructor(props) {
super(props);

this.state = {
data:[],
redirectToReferrer: false
};

this.logout = this.logout.bind(this);
}
  componentDidMount() {
  
$(".loader").delay(500).fadeOut("slow");
  $("#overlayer").delay(500).fadeOut("slow");
  $(".loader").delay(500).fadeOut("slow");
  $("#overlayer").delay(500).fadeOut("slow");

// Off Canvas Menu Open & Close
$('#offCanvas').on('click', function () {
    $('.nav-offcanvas').addClass('open');
    $('.offcanvas-overlay').addClass('on');
});
$('#offCanvasClose, .offcanvas-overlay').on('click', function () {
    $('.nav-offcanvas').removeClass('open');
    $('.offcanvas-overlay').removeClass('on');
});
}


logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}

render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/'}/>)
}


return (
<div>
<a id="offCanvas" className="hamburger"><img  className="ti-menu" src={bars} /></a>
<div className="nav-offcanvas">
    <button type="button" className="close" id="offCanvasClose" aria-label="Close">
        <img className="ti-close" src={close} />
    </button>
    <div className="nav-offcanvas-menu">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/item-type">Item Type</NavLink></li>
            <li><NavLink to="#">Product</NavLink></li>
            <li><NavLink to="#">About Us</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            <li><NavLink to="/signup">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><a href="" onClick={this.logout}>Logout</a></li>
        </ul>
    </div>
</div>
<div className="offcanvas-overlay"></div>
<span className="loader">
  <img src={good} alt="" />
</span>

</div>


);

}
}

export default Header;