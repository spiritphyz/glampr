import React from 'react';
let InviteOthers = (props) => {
  // this input fields needs to append a new element in its containing div
  // on each submit - and then clear the entry field for the next submission
  // alternatively, each submission will populate a slide toggle list that can be viewed
  // to save screen real estate
  return (
    <div className="invite-container">
      <h4>Lets Invite Others!</h4>
      <div>
        <input
          id = "whoEmail"
          className = "invitationText"
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

module.exports = InviteOthers;