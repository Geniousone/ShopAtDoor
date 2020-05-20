import React, { Component } from 'react';
import grocery  from "../assets/images/grocery_graphic.png";
import Header from "./Header.js";
import Footer from "./Footer.js";
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {PostData} from './PostData.js';
class ContactUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      item_name:'Grocery',
      
    }

    this.refresh = this.refresh.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount(){
   
    const apiUrl = 'http://localhost:8080/shopatdoor/welcome/getitems';
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
         
        },
        (error) => {
          this.setState({ error });
        }
      )

  }
  
  
 
 
refresh(e) {
this.setState({[e.target.name]:e.target.className}); 
console.log({[e.target.name]:e.target.className})


    }
 onChange(e){
 
}
   
render() {
  localStorage.setItem('item_name', this.state.item_name);
    const { items} = this.state;
    
		return (
<div>
<Header />	

<div className="main_body">
  <div className="login_screen">
    <div className="logo login_page">
      <a href="#"><img src={grocery} /></a>
    </div>
    
      <div className="user_login Select_language">
        
      <div className="form_box ">
        <h3>Item Type</h3>
      </div>
      {items.map(item => (
      <div className={item.item_name} key={item.id}>
        
        <NavLink to="/time-selection" onClick={this.refresh} name="item_name" className={item.item_name}  ><img src={grocery} /> {item.item_name}  </NavLink>
      </div>
      ))}
      
    </div>
  </div>
</div>
<Footer/>
</div>
		);
	}
}
export default ContactUs;