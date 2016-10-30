import React from 'react';
let DescriptionCost = (props) => {

  return (
    <div className="tripDate-container">
      <h3>How Much Will This Cost?</h3>
      <div>
        <input
          className = "tripCost"
          id = "cost_per_member"
          type="number"
          placeholder="$$$"
          onChange={props.handleChange}
        />
        <input
          className = "tripPaymentDate"
          id = "cost_deadline"
          type="date"
          placeholder="Due"
          onChange={props.handleChange}
        />
      </div>
    </div>
  )
}

export default DescriptionCost;