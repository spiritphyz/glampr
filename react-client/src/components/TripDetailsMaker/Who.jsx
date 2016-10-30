import React from 'react';
let InviteOthers = (props) => {
  // this input fields needs to append a new element in its containing div
  // on each submit - and then clear the entry field for the next submission
  // alternatively, each submission will populate a slide toggle list that can be viewed
  // to save screen real estate
  return (
    <div className="invite-container">
      <h4>Lets Invite Others!</h4>
      {props.invitees.map((invite)  =>
        (
        <div>
          <input
            id = {"email" + invite }
            key = {invite}
            className = "invitationText"
            type="text"
            placeholder="Email Address"
            onChange={props.handleChange}
          />
        </div>
        ))}
        <button className="addInvite" onClick={props.addInvite}>Invite More</button>
    </div>
  )
}

module.exports = InviteOthers;