import React from 'react';


let WhereLocation = (props) => {
  return (
    <div>
    <div>
      <h3>Title of The Event : </h3>
      <input 
        id="tripTitle"
        type="text"
        placeholder="" 
        onChange={ props.handleChange }
      />
    </div>
        <h3>Where Would You Like To Go?</h3>
        <div>
          <input
            id = "address"
            className = "address"
            type="text"
            placeholder="i.e. Kilamanjaro"
            onChange={props.handleChange}
          />
        </div>
      </div>
  )
}

module.exports = WhereLocation;