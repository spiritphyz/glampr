import React from 'react';
import WhereLocation from './Where.jsx';
import DescriptionWhen from './When.jsx';
import InviteOthers from './Who.jsx';
class TripDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    saveEvents: {},
    };
    //anytime you bind a function to this - do it here in this way -
    // bind only runs once on intializations, and not each render
    // this.intitialize = this.intitialize.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // intitialize() {
  //   // return new Promise(function(resolve, reject) {
  // 
  //     //   resolve(data);
  //     // });
  //   // });
  // }
  handleChange(e) {
    console.log(e.target.id)
    this.setState({ [e.target.id]: e.target.value })
  }
  handleSubmit(e) {
    console.log(e.target.id,':', this.state[e.target.id]);
    // this can submit a chunk of a form to database,
    // or it can save chunk by chunk into state and send at once 
  }

  componentWillMount() {
    // this.intitialize().then(function(data) {
    //   that.setState({somethingWithData});
    // });
  }
  render() {
    return (
      <div>
        <Description
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        <DescriptionWhen
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        /> 
        <WhereLocation 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
        <InviteOthers 
          handleChange = {this.handleChange}
          handleSubmit = {this.handleSubmit}
        />
      </div>
    );
  }
}

var Description = (props) => {

  return (
    <div className="desc-container">
      <h4>Description</h4>
      <div>
        <input
          id = "tripDescription"
          className = "tripDescription"
          type="text"
          placeholder="Hello!"
          onChange={props.handleChange}
        />
      <button id="tripDescription" onClick={props.handleSubmit}>Save</button>
      </div>
    </div>
  )
}


export default TripDetails