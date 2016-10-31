import React from 'react';
let DescriptionWhen = (props) => {

  return (
    <div>
      <h3>When Would You Like To Go?</h3>
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
    </div>
  )
}

module.exports = DescriptionWhen 