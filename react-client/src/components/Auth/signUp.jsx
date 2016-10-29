import React from 'react';
import $ from 'jquery';

const SignUp = () => {

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

      if(!$('#signUp').children('div').hasClass('error')) {
        $('#signUp').append(errorMsg);        
      }
      
    } else {
      $.ajax({
        type: "POST",
        url: '/SignUp',
        data: currUser
      }).done(function(){
        console.log('successful post from signin');
      }).fail(function(){
        console.log('failed to post from signin');
      });      
      document.getElementById('#signUpForm').reset();
    }
  }

  return (
    <div id="signUp">
      <h1> Sign Up </h1>
      <form id="signUpForm">
        <div>
          <div>First Name*</div>
          <input 
            data-type="firstName" 
            type="text" 
            placeholder="First Name"
            onChange={handleChange}
          />
        </div>  
        <div> 
          <div>Last Name*</div>        
          <input 
            data-type="lastName" 
            type="text" 
            placeholder="Last Name"
            onChange={handleChange}
          />
        </div>  
        <div>
          <div>Email*</div>        
          <input 
            data-type='email'
            type="text" 
            placeholder="Email Address"
            onChange= {handleChange}
          />
        </div>
        <div>
          <div>Password*</div>        
          <input 
            data-type="password" 
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div>
          <div>Phone Number</div>
          <input 
            data-type='phoneNumber'
            type="text" 
            placeholder="Phone Number"
            onChange= {handleChange}
          />
        </div>
        <input id="submit" onClick={signUp} type="submit" value="Submit"/>
      </form>

    </div>
  );
}



export default SignUp