import React from 'react';
import TripDetails from './tripDetails/tripDetails.jsx';
import Terms from './terms/termsMaker.jsx';
import GearViewMaker from './gearList/gearMakerView.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events: []
    };
    //anytime you bind a function to this - do it here in this way -
    // bind only runs once on intializations, and not each render
    // this.intitialize = this.intitialize.bind(this);
  }
  // intitialize() {
  //   // return new Promise(function(resolve, reject) {
  //     // $.get(someUrl, function(data) {
  //     //   resolve(data);
  //     // });
  //   // });
  // }
  componentWillMount() {
    // this.intitialize().then(function(data) {
    //   that.setState({somethingWithData});
    // });
  }
  render() {
    // if () {
    //   return (
    //     <div>Pending Results</div>
    //   );
    // }
    return (
      <div>    
        <div>Hello World!</div>
        <GearViewMaker />
        <TripDetails />
        <Terms />
      </div>
    );
  }
}

export default App;