import React from 'react';


let WhereLocation = (props) => {
  return (
    <div>
    <div>
      <p>
      <h4 className="card-title">Title of trip</h4>
      <input 
        id="tripTitle"
        type="text"
        placeholder="" 
        onChange={ props.handleChange }
      />
      </p>
    </div>
        <p>
        <h4 className="card-title">Where are you going?</h4>
        <div>
          <input
            id = "address"
            className = "address"
            type="text"
            placeholder="Kilimanjaro"
            onChange={props.handleChange}
          />
        </div>
        </p>
      </div>
  );
};

module.exports = WhereLocation;