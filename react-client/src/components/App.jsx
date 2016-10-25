import React from 'react';
import { Link } from 'react-router'
import TripDetails from './tripDetails/tripDetails.jsx';
import Terms from './terms/termsMaker.jsx';
import GearViewMaker from './gearList/gearMakerView.jsx';
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
        <li><Link to="/TripDetails">Trip Details</Link></li>
        <li><Link to="/GearViewMaker">Gear View Maker</Link></li>
        <li><Link to="/TermsMaker">Terms Maker</Link></li>
        <li><Link to="/TermsUser">Terms User</Link></li>
        <li><Link to="/UserHome">User Home</Link></li>
      </div>
    );
  }
}

export default App;