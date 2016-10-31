import React from 'react';
import $ from 'jquery';
import flickr from './flickrAPI.jsx'

class TripDetailsUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //inputs: false;
      tripInfo: {}
    }
    this.getTripDetails = this.getTripDetails.bind(this);
    this.setPhotoState = this.setPhotoState.bind(this);
    this.getTripDescription = this.getTripDescription.bind(this);
  };

  componentDidMount() {

    var context = this;

    // get trip information that maker created
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

    // get photos from flickr based on trip description
    this.getPhotosfromFlickr();

  }

  getPhotosfromFlickr() {
    var description = this.state.tripInfo.description
    flickr.getAllPhotosAsync(description, this.setPhotoState);
  }

  setPhotoState(results) {
    this.setState({urls: results})
    console.log(this.state, 'this.state in setPhotos');
  }

  getTripDescription() {
    return this.state.tripInfo.description;
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
    if (!this.state.urls) {
      return (
        <div className="rxContainer">
          <h1> User HomePage </h1>
          <TripDetails info={this.state.tripInfo}/>
        </div>
      )
    } else {
      return (
        <div className="container center">
          <h1> User HomePage </h1>
          <TripDetails info={this.state.tripInfo}/>
          <Photos photos={this.state.urls}/>
        </div>
      )    
    }
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


let Photos = (props) => {

  console.log(props.photos);
  return (
    <div>

    <h3> Photos </h3>
    {props.photos.map(photo => {
     return (<Photo url={photo}/>)
    })}

    </div>
  )

}

let Photo = (props) => {
  return (
    <div>
    <img src={props.url} />
    </div>
  )
}



export default TripDetailsUser