import React from 'react';
let DescriptionCost = (props) => {

  return (
    <p>
      <div className="pt-1 tripDate-container">
        <h4 className="card-title">Cost per person and due date</h4>
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
    </p>
  );
};

export default DescriptionCost;