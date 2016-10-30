import React from 'react';
import $ from 'jquery';

class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //inputs: false;
      tripInfo: {}
    }
    this.getTripDetails = this.getTripDetails.bind(this);
  };

  componentDidMount() {
    var context = this;
    $.ajax({
      type: "GET",
      url: '/tripDetailsUser',
    }).done(function(data){
      console.log(data);
      context.getTripDetails(data);
      console.log('successful get from terms');
    }).fail(function(){
      console.log('failed to get from terms');
    });
  }

  getTripDetails(data) {
    console.log(data, 'data')
    var tripInfo = {};
    tripInfo.title = data.title;
    tripInfo.description= data.description;
    tripInfo.start_date= data.start_date;
    tripInfo.end_date= data.end_date;
    tripInfo.address= data.address;
    this.setState({tripInfo: tripInfo});
  }

  render() {
    return (
      <div className="container center">
        <h1> User HomePage </h1>
        <TripDetails info={this.state.tripInfo}/>
        <InviteStatus />
        <GearObtainedStatus />
       
      </div>
    );
  }
}

let TripDetails = (props) => {
  return (
    <div>
      <h1> Trip Details </h1>
      <h3> Your trip: {props.info.title} </h3>
      <h3> About: {props.info.description} </h3>
      <h3> Start Date: {props.info.start_date} </h3>
      <h3> End Date: {props.info.end_date} </h3>
      <h3> Where: {props.info.address} </h3>
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


let GearObtainedStatus = () => {
  return (
    <div>
      <h3> Gear Obtained Status </h3>
    </div>
  )
}




export default UserHome