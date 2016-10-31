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
    invitees: [1],
    submissionEmail: {}
    };
    //anytime you bind a function to this - do it here in this way -
    // bind only runs once on intializations, and not each render
    // this.intitialize = this.intitialize.bind(this);
    this.state.submission.google_maps_url = "";
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
    let { submission, submissionEmail } = this.state;
    if ( e.target.id.slice(0,5) === 'email' ) {
      this.setState({ submissionEmail: Object.assign({}, submissionEmail, {
      [e.target.id] : e.target.value
    })});
    } else {
      this.setState({ submission: Object.assign({}, submission, {
        [e.target.id] : e.target.value
      })});      
    }
  }
  handleSubmit(e) {
    let { submission } = this.state;
    let invitees = this.state.submissionEmail;
    let tripData = this.state.submission;
    invitees = Object.keys(invitees).map(function(email) {
      return invitees[email];
    })
    let data = { tripData: tripData, invitees: invitees };
    console.log(data);
    $.ajax({
      type: "POST",
      url: '/tripDetailsMaker',
      contentType: 'application/json',
      data: JSON.stringify(data)
    }).done(function(){
      window.location = window.location.pathname + '#/TermsMaker';
      console.log('successful post from tripDetails');
    }).fail(function(){
      console.log('failed to post from tripDetails');
    });
  }

  render() {
    return (
      <div className="rxContainer">
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
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

var Description = (props) => {
  return (
    <div>
      <h3>Description</h3>
      <div>
        <input
          id= "description"
          className= "tripDescription"
          type="text"
          placeholder=""
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}


export default TripDetails