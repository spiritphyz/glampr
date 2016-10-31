import React from 'react';
import $ from 'jquery';
const SignUp = (props) => {

  let currUser = {};
  currUser.first_name = '';
  currUser.last_name = '';
  currUser.email = '';
  currUser.password = '';
  currUser.phone_number = '';
  
  const handleChange = (e) => {
    let inputType = e.target.getAttribute('data-type');
    let input = e.target.value;
    if (inputType === 'firstName') {
      currUser.first_name = input;
    }
    if (inputType === 'lastName') {
      currUser.last_name = input;
    }
    if (inputType === 'email') {
      currUser.email = input;
    }
    if (inputType === 'password') {
      currUser.password = input;
    }
    if (inputType === 'phoneNumber') {
      currUser.phone_number = input;
    }
  }

  const signUp = ()  => {
    if (currUser.first_name === '' ||
        currUser.last_name === '' ||
        currUser.email === '' ||
        currUser.password === '') {

      var errorMsg = '<div class=\"error\">Please enter all the required fields</div>';

      if(!($('#signUp').children('div').hasClass('error'))) {
        $('#signUp').append(errorMsg);
      }
      
    } else {
      $.ajax({
        type: "POST",
        url: '/SignUp',
        contentType: 'application/json',
        data: JSON.stringify(currUser)
      }).done(function(data){
        if(data) {
          window.location = window.location.pathname + '#/SignIn'; 
          console.log('successful sign up');
        } else {
          console.log('User already exists')
        }
      }).fail(function(){
        console.log('failed sign up');
      }); 
    }
  }

  return (
    <div className="rxContainer">
      <h1> Sign Up </h1>
        <div>
          <p>First Name*</p>
          <input 
            data-type="firstName" 
            type="text" 
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>  
        <div> 
          <p>Last Name*</p>        
          <input 
            data-type="lastName" 
            type="text" 
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>  
        <div>
          <p>Email*</p>        
          <input 
            data-type='email'
            type="text" 
            placeholder="Email Address"
            onChange= {handleChange}
          />
        </div>
        <div>
          <p>Password*</p>        
          <input 
            data-type="password" 
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Phone Number*</p>
          <input 
            data-type='phoneNumber'
            type="text" 
            placeholder="Phone Number"
            onChange= {handleChange}
          />
        </div>
        <button id="submit" onClick={signUp}>Submit</button>
      </div>
  );
}

export default SignUp