import React from 'react';
let InviteOthers = (props) => {
  // this input fields needs to append a new element in its containing div
  // on each submit - and then clear the entry field for the next submission
  // alternatively, each submission will populate a slide toggle list that can be viewed
  // to save screen real estate
  return (
    <p>
    <div className="invite-container">
      <h4 className="card-title">Who's going?</h4>
      {props.invitees.map((invite) =>
        (
        <div>
          <input
            id = {"email" + invite }
            key = {invite}
            className = "invitationText"
            type="text"
            placeholder="Phone"
            onChange={props.handleChange}
          />
        </div>
        ))}
        <button className="btn btn-warning btn-lg btn-sm" onClick={props.addInvite}>+ Person</button>
    </div>
    </p>
  );
};

module.exports = InviteOthers;