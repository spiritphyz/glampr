import React from 'react';
import { Link } from 'react-router';

class StartTrip extends React.Component {
  
  render() {
    return (
      <div>
        <button>
          <Link to="/TripDetailsMaker">Start a trip!</Link>
        </button>
      </div>
    )
  }
}

export default StartTrip;