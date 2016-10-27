import React from 'react';


let WhereLocation = (props) => {
  return (
    <div className="where-container">
    <div>
      <h4>Title of The Event : </h4>
      <input 
        id="tripTitle"
        type="text"
        placeholder="" 
        onChange={ props.handleChange }
      />
    </div>
        <h4>Where Would You Like To Go?</h4>
        <div>
          <input
            id = "whereStreet"
            className = "address addressStreet"
            type="text"
            placeholder="Street"
            onChange={props.handleChange}
          />
          <input
            id = "whereCity"
            className = "address addressCity"
            type="text"
            placeholder="City"
            onChange={props.handleChange}
          />
          <input
            id = "whereZip"
            className = "address addressZip"
            type="text"
            placeholder="Zip"
            onChange={props.handleChange}
          />
          <input
            id = "whereCountry"
            className = "address addressCountry"
            type="text"
            placeholder="Country"
            onChange={props.handleChange}
          />
        </div>
      </div>
  )
}

module.exports = WhereLocation;