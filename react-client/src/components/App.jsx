import React from 'react';
import { Link, Router, Navigation } from 'react-router'
import SignIn from './Auth/signIn.jsx';
import SideBar from './sideBar/sideBar.jsx'
import $ from 'jquery'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events: [],
    loginStatus: ''
    };
    this.loginStatus = this.loginStatus.bind(this)
  }
  componentWillMount() {

  }
  signOut() {
    $.ajax({
      type: "GET",
      url: '/SignOut',
    }).done(function(){
      console.log('successful sign out');
      window.location = '/#/SignIn';
    }).fail(function(){
      console.log('failed sign out');
    });      
  }
  loginStatus(status) {
    this.setState({loginStatus: status})
  }
  render() {
    console.log(window.location.pathname + '#');

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       loginStatus: this.loginStatus
     }))
  
  if (!childrenWithProps) {
   return (
     <div>
       <button onClick={this.signOut}>Sign Out</button>
       <button><Link to="/SignUp">Sign Up</Link></button>
       <button><Link to="/SignIn">Sign In</Link></button>
       <div className="Main">
         {<SignIn/>}
       </div>
       <div className="Sidebar">
         <SideBar views={this.state.loginStatus}/>
       </div>
       <div className="navBar">    
         <li><Link to="/SignIn">Sign In</Link></li>
         <li><Link to="/SignUp">Sign Up</Link></li>
         <li><Link to="/StartTrip">Start Trip</Link></li>
         <li><Link to="/TripDetailsMaker">Trip Details Maker</Link></li>
         <li><Link to="/GearViewMaker">Gear View Maker</Link></li>
         <li><Link to="/TermsMaker">Terms Maker</Link></li>
         <li><Link to="/TermsUser">Terms User</Link></li>
         <li><Link to="/TripDetailsUser">Trip Details User</Link></li>
         <li><Link to="/ShoppingList">Shopping List</Link></li>
       </div>
     </div>
   )}

    return (
      <div>
        <button onClick={this.signOut}>Sign Out</button>
        <button><Link to="/SignUp">Sign Up</Link></button>
        <button><Link to="/SignIn">Sign In</Link></button>
        <div className="Main">
          {childrenWithProps}
        </div>
        <div className="Sidebar">
          <SideBar views={this.state.loginStatus}/>
        </div>
        <div>    
          <li><Link to="/SignIn">Sign In</Link></li>
          <li><Link to="/SignUp">Sign Up</Link></li>
          <li><Link to="/StartTrip">Start Trip</Link></li>
          <li><Link to="/TripDetailsMaker">Trip Details Maker</Link></li>
          <li><Link to="/GearViewMaker">Gear View Maker</Link></li>
          <li><Link to="/TermsMaker">Terms Maker</Link></li>
          <li><Link to="/TermsUser">Terms User</Link></li>
          <li><Link to="/TripDetailsUser">Trip Details User</Link></li>
          <li><Link to="/ShoppingList">Shopping List</Link></li>
        </div>
      </div>
    )
  }
}

export default App; 
