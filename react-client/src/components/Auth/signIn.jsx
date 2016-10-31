import React from 'react';
import $ from 'jquery';
const SignIn = (props) => {
  $.ajax({
   type: "GET",
   url: '/SignIn',
  }).done(function(res) {
    if (!res) {
      window.location = window.location.pathname + '#/SignIn';
    } else {
      
    }
     console.log('successful post from signin/session');
  }).fail(function (){
     window.location = window.location.pathname + '#/SignIn';
     console.log('failed to post from signin');
  });

  let username = ''
  let password = ''
  let currUser = {};
  currUser.username = username;
  currUser.password = password;
  
  const handleChange = (e) => {
    let inputType = e.target.getAttribute('data-type');
    let input = e.target.value;
    if (inputType === 'username') {
      currUser.username = input;
    }
    if (inputType === 'password') {
      currUser.password = input;
    }
  }
  const signIn = ()  => {
    $.ajax({
      type: "POST",
      url: '/SignIn',
      contentType: 'application/json',
      data: JSON.stringify(currUser)
    }).done(function(res) {
      console.log(res);
      if(res.auth) {
        if (!!res.status) {
          props.loginStatus('user')
          window.location = window.location.pathname + '#/TripDetailsUser';
        } else {
          props.loginStatus('maker')
          window.location = window.location.pathname + '#/StartTrip';
        }
      }
      console.log('successful post from signin');
    }).fail(function (){
      window.location = window.location.pathname + '#/SignIn';

      console.log('failed to post from signin');
    });
  }

  return (
    <div className ="container center">
      <h1> Sign In </h1>
      <div>
        <input 
          data-type="username"
          type="text" 
          placeholder="Username(email)"
          onChange= {handleChange}
        />
      </div>
      <div>
        <input 
          data-type="password" 
          type="password" 
          placeholder="password"
          onChange={handleChange}
        />
      </div>
      <button id="submit" onClick={signIn}> Submit </button>

    </div>
  );
}

export default SignIn