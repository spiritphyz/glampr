import React from 'react';
let DescriptionWhen = (props) => {

  return (
    <div className="tripDate-container">
      <h4>When Would You Like To Go?</h4>
      <div>
        <input
          className = "tripDeparture"
          id = "whenDepart"
          type="text"
          placeholder="Hello!"
          value={props.value}
          onChange={props.handleChange}
        />
        <input
          id = "whenReturn"
          className = "tripReturn"
          type="text"
          placeholder="Hello!"
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
      <button onClick={props.handleSubmit}>Submit</button>
    </div>
  )
}

module.exports = DescriptionWhen 