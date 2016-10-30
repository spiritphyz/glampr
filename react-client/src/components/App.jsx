import React from 'react';
import { Link } from 'react-router'
import SignIn from './Auth/signUp.jsx';
import sideBar from './sideBar/sideBar.jsx'
import $ from 'jquery'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events: []
    };
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
  render() {
    console.log(sideBar)
    return (
      <div>
        <button onClick={this.signOut}>Sign Out</button>
        <button><Link to="/SignUp">Sign Up</Link></button>
        <button><Link to="/SignIn">Sign In</Link></button>
        <div className="Main">
          {//main
          }
        </div>
        <div className="Sidebar">
          {sideBar}
        </div>
        <div>
          {<SignIn />}
          {this.props.children}
        </div>
        <div className="navBar">    
          <div>Hello World!</div>
          <li><Link to="/SignIn">Sign In</Link></li>
          <li><Link to="/SignUp">Sign Up</Link></li>
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