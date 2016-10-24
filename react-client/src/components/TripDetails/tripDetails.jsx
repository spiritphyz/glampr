import React from 'react';

class TripDetails extends React.Component {
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
        <DescriptionWhen 
          value={this.state.value}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        /> 
        <WhereLocation 
          value={this.state.value}
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </div>
    );
  }
}

var DescriptionWhen = (props) => {

  return (
    <div className="desc-container">
      <h4>description</h4>
      <div>
        <input
          className = "tripDescription"
          type="text"
          placeholder="Hello!"
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
      <button onClick={props.handleSubmit}>Submit</button>
    </div>
  )
}

var WhereLocation = (props) => {
  return (
    <div className="where-container">
        <h4>Where Would You Like To Go?</h4>
        <div>
          <input
            className = "addressField"
            type="text"
            placeholder="AddressField1"
            value={props.value}
            onChange={props.handleChange}
          />
        </div>
      <button onClick={props.handleSubmit}>Submit</button>
      </div>
  )
}


export default TripDetails