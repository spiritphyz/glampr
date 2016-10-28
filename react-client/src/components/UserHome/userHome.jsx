import React from 'react';
import $ from 'jquery';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //inputs: false;
      }
    };

    //bind functions to class
    //this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleContentChange = this.handleContentChange.bind(this);
    // this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.addCategory = this.addCategory.bind(this);
    // this.addContent = this.addContent.bind(this);

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: 'http://104.236.160.117:3000/users/trips/',
    }).done(function(data){
      console.log(data, 'data from user trips');
      this.setState({data})
      console.log('successful post from terms');
    }).fail(function(){
      console.log('failed to post from terms');
    });
  }

  getTripDetails() {

  }

  render() {
    return (
      <div>
        <h1> User HomePage </h1>
        <TripDetails />
        <InviteStatus />
        <GearListStatus />
        <GearObtainedStatus />
       
      </div>
    );
  }
}

let TripDetails = () => {
  return (
    <div>
      <h3> Trip Details </h3>
    </div>
  )
}

let InviteStatus = () => {
  return (
    <div>
      <h3> Invite Status </h3>
    </div>
  )
}

let GearListStatus = () => {
  return (
    <div>
      <h3> Gear List Status </h3>
    </div>
  )
}

let GearObtainedStatus = () => {
  return (
    <div>
      <h3> Gear Obtained Status </h3>
    </div>
  )
}




export default UserHome