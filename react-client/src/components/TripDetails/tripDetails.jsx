import React from 'react';

class TripDetails extends React.Component {
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
    return (
      <FirstChild/>
    );
  }
}

var FirstChild = (props) => {
  return (
    <div>Hello Again!!</div>
  )
}

export default TripDetails