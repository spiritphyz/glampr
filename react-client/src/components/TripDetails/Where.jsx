import React from 'react';


let WhereLocation = (props) => {
  return (
    <div className="where-container">
        <h4>Where Would You Like To Go?</h4>
        <div>
          <input
            id = "whereStreet"
            className = "addressStreet"
            type="text"
            placeholder="AddressField1"
            value={props.value}
            onChange={props.handleChange}
          />
          <input
            id = "whereCity"
            className = "addressCity"
            type="text"
            placeholder="AddressField1"
            value={props.value}
            onChange={props.handleChange}
          />
          <input
            id = "whereZip"
            className = "addressZip"
            type="text"
            placeholder="AddressField1"
            value={props.value}
            onChange={props.handleChange}
          />
          <input
            id = "whereCountry"
            className = "addressCountry"
            type="text"
            placeholder="AddressField1"
            value={props.value}
            onChange={props.handleChange}
          />
        </div>
      <button onClick={props.handleSubmit}>Submit</button>
      </div>
  )
}

module.exports = WhereLocation;