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
        <li><Link to="/signIn">Sign In</Link></li>
        <li><Link to="/signUp">Sign Up</Link></li>
        <li><Link to="/tripDetails">Trip Details</Link></li>
        <li><Link to="/gearViewMaker">Gear View Maker</Link></li>
        <li><Link to="/termsMaker">Terms Maker</Link></li>
        <li><Link to="/termsUser">Terms User</Link></li>
        <li><Link to="/userHome">User Home</Link></li>
        <li><Link to="/shoppingList">Shopping List</Link></li>
      </div>
    );
  }
}

export default App;