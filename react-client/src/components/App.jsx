import React from 'react';
import { Link } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events: []
    };
  }
  componentWillMount() {

  }
  render() {

    return (
      <div>    
        <div>Hello World!</div>
        <li><Link to="/SignIn">Sign In</Link></li>
        <li><Link to="/SignUp">Sign Up</Link></li>
        <li><Link to="/TripDetails">Trip Details</Link></li>
        <li><Link to="/GearViewMaker">Gear View Maker</Link></li>
        <li><Link to="/TermsMaker">Terms Maker</Link></li>
        <li><Link to="/TermsUser">Terms User</Link></li>
        <li><Link to="/UserHome">User Home</Link></li>
        <li><Link to="/ShoppingList">Shopping List</Link></li>
      </div>
    );
  }
}

export default App;