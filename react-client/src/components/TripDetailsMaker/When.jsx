import React from 'react';
let DescriptionWhen = (props) => {

  return (
    <div>
      <p>
        <h4 className="card-title">Start and end dates</h4>
        <div>
          <input
            className = "tripDeparture"
            id = "start_date"
            type="date"
            placeholder="Start"
            value={props.value}
            onChange={props.handleChange}
          />
          <input
            className = "tripReturn"
            id = "end_date"
            type="date"
            placeholder="End"
            value={props.value}
            onChange={props.handleChange}
          />
        </div>
      </p>
    </div>
  );
};

module.exports = DescriptionWhen;