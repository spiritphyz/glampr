import React from 'react';
import $ from 'jquery';

var mockData = 
{
    "tripInfo": {
        "tripData":{
            "title":"Sykes Hot Springs",
            "description":"Sykes Hot Springs via Pine Ridge Trail is a 19.5 mile moderately trafficked out and back trail located near Big Sur, CA that features hot springs and is rated as difficult. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail.",
            "start_date":"2016-12-02T09:00:00.000Z",
            "end_date":"2016-12-04T21:00:00.000Z",
            "address":"Pfeiffer Big Sur State Park",
            "google_maps_url":"https://www.google.com/maps/place/Sykes+Hot+Springs/@36.2433473,-121.7768491,13z/data=!4m20!1m14!4m13!1m5!1m1!1s0x808d86f68e74396d:0x25fd8c923089e234!2m2!1d-121.6899884!2d36.2515153!1m6!1m2!1s0x808d86f68e74396d:0x25fd8c923089e234!2sSykes+Hot+Springs,+California!2m2!1d-121.6899884!2d36.2515153!3m4!1s0x808d86f68e74396d:0x25fd8c923089e234!8m2!3d36.2515153!4d-121.6899884",
            "cost_per_member":50,
            "cost_deadline":"2016-12-01T09:00:00.000Z",
            "tags":"vigorous|hot springs|santa cruz|hiking|long"

        },
        "members":[{
                "first_name":"Casey",
                "last_name":"Garcia",
                "email":"caseyggarcia@gmail.com",
                "role":1,"phone_number":null
            },
            {
                "first_name":"Cindy",
                "last_name":"Manit",
                "email":"cindymanit@gmail.com",
                "role":2,
                "phone_number":null
            },
            {
                    "first_name":"Ben",
                    "last_name":"Lee",
                    "email":"brl221@yahoo.com",
                    "role":2,
                    "phone_number":null

        }]
    }
}; 


class UserHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //inputs: false;
      tripInfo: {}
    }
  };

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: '/tripDetailsUser',
    }).done(function(data){
      this.getTripDetails(data);
      console.log('successful get from terms');
    }).fail(function(){
      console.log('failed to get from terms');
    });
  }

  getTripDetails(data) {
    var tripInfo = {};
    tripInfo.title = data.tripInfo.tripData.title;
    tripInfo.description= data.tripData.description;
    tripInfo.start_date= data.tripData.start_date;
    tripInfo.end_date= data.tripData.end_date;
    tripInfo.address= data.tripData.address;
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