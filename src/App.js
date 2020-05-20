import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import Index from './components/Index.js';
import Login from './components/Login.js';
import Welcome from './components/Welcome.js';
import SignUp from './components/SignUp.js';
import TimeSelection from './components/TimeSelection.js';
import ContactUs from './components/ContactUs.js';
import ItemType from './components/ItemType.js';
import Orderlisting from './components/Orderlisting.js';

class App extends Component {

render() {
return (
  <div>
<BrowserRouter>
<Route exact path="/" component={Welcome}/>
<Route exact path="/login" component={Login}/>
<Route path="/home" component={Index}/>
<Route path="/signup" component={SignUp}/>
<Route path="/time-selection" component={TimeSelection}/>
<Route path="/item-type" component={ItemType}/>
<Route path="/contact-us" component={ContactUs}/>
<Route path="/order-listing" component={Orderlisting}/>
</BrowserRouter>

</div>
);
}
}
export default App;
