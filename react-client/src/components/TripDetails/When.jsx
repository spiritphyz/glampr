import React from 'react';
let DescriptionWhen = (props) => {

  return (
    <div className="tripDate-container">
      <h4>When Would You Like To Go?</h4>
      <div>
        <input
          className = "tripDeparture"
          id = "start_date"
          type="date"
          placeholder="Hello!"
          value={props.value}
          onChange={props.handleChange}
        />
        <input
          className = "tripReturn"
          id = "end_date"
          type="date"
          placeholder="Hello!"
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

module.exports = DescriptionWhen 