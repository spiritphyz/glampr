import React from 'react';
import WhereLocation from './Where.jsx';
import DescriptionWhen from './When.jsx';
import InviteOthers from './Who.jsx';
import DescriptionCost from './Cost.jsx'
import $ from 'jquery';

class TripDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    submission: {},
    invitees: [1]
    };
    //anytime you bind a function to this - do it here in this way -
    // bind only runs once on intializations, and not each render
    // this.intitialize = this.intitialize.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addInvite = this.addInvite.bind(this);
  }
  addInvite() {
    var inv = this.state.invitees;
    inv = inv.concat([inv.length + 1])
    this.setState({ invitees: inv })
  }

  handleChange(e) {
    let { submission } = this.state;
    this.setState({ submission: Object.assign({}, submission, {
      [e.target.id] : [e.target.value]
    })});
  }
  handleSubmit(e) {
    let { submission } = this.state;
    $.ajax({
      type: "POST",
      url: '/tripInfo',
      data: submission
    }).done(function(){
      console.log('successful post from tripDetails');
    }).fail(function(){
      console.log('failed to post from tripDetails');
    });
  }

  render() {
    return (
      <div>
        <WhereLocation 
          handleChange = {this.handleChange}
        />
        <Description
          handleChange = {this.handleChange}
        />
        <DescriptionWhen
          handleChange = {this.handleChange}
        />
        <DescriptionCost
          handleChange = {this.handleChange}
        /> 
        <InviteOthers 
          handleChange = {this.handleChange}
          addInvite = {this.addInvite}
          invitees = {this.state.invitees}
        />
        <button className="tripDetailsSubmit"onClick={this.handleSubmit}>Submit</button>
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
          id= "description"
          className= "tripDescription"
          type="text"
          placeholder="Hello!"
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}


export default TripDetails