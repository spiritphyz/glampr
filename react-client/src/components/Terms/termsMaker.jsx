import React from 'react';

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    events: [],
    value: ''
    };
    //anytime you bind a function to this - do it here in this way -
    // bind only runs once on intializations, and not each render
    // this.intitialize = this.intitialize.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // intitialize() {
  //   // return new Promise(function(resolve, reject) {
  //     // $.get(someUrl, function(data) {
  //     //   resolve(data);
  //     // });
  //   // });
  // }
  handleChange() {

  }
  handleSubmit() {

  }
  componentWillMount() {
    // this.intitialize().then(function(data) {
    //   that.setState({somethingWithData});
    // });
  }
  render() {
    return (
      <div>
        <Form /> 
      </div>
    );
  }
}


let Form = (props) => {
  return (
    <h1> Terms Page in Progress </h1>
  )
}


export default Terms