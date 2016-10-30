import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App.jsx';

import SignIn from './components/auth/signIn.jsx';
import SignUp from './components/auth/signUp.jsx';


import TripDetailsMaker from './components/tripDetailsMaker/tripDetailsMaker.jsx';
import GearViewMaker from './components/gearList/gearMakerView.jsx';

import TermsMaker from './components/terms/termsMaker.jsx'
import TermsUser from './components/terms/termsUser.jsx'

import TripDetailsUser from './components/tripDetailsUser/tripDetailsUser.jsx';
import ShoppingList from './components/ShoppingList/ShoppingList.jsx';
import $ from 'jquery';

const signOut = ()  => {
      $.ajax({
        type: "GET",
        url: '/SignOut',
      }).done(function(){
        console.log('successful sign out');
      }).fail(function(){
        console.log('failed sign out');
      });      
    }

ReactDOM.render((
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="SignIn" component={SignIn}/>
        <Route path="SignUp" component={SignUp}/>
        <Route path="TripDetailsMaker" component={TripDetailsMaker}/>
        <Route path="GearViewMaker" component={GearViewMaker}/>
        <Route path="termsmaker" component={TermsMaker}/>
        <Route path="TermsUser" component={TermsUser}/>
        <Route path="TripDetailsUser" component={TripDetailsUser}/>
        <Route path="ShoppingList" component={ShoppingList}/>
      </Route>
    </Router>
  </div>
  ), document.getElementById('app'))