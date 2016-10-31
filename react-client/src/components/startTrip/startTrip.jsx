import React from 'react';
import { Link } from 'react-router';

class StartTrip extends React.Component {
  
  render() {
    return (
      <div>
        <Link to="/TripDetailsMaker">
        <button className="btn btn-warning btn-sm">Let's start planning!</button>
        </Link>
      </div>

    )
  }
}

export default StartTrip;