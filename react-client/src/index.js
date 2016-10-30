import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App.jsx';

import SignIn from './components/auth/signIn.jsx';
import SignUp from './components/auth/signUp.jsx';

import TripDetails from './components/tripDetails/tripDetails.jsx';
import GearViewMaker from './components/gearList/gearMakerView.jsx';

import TermsMaker from './components/terms/termsMaker.jsx'
import TermsUser from './components/terms/termsUser.jsx'

import UserHome from './components/userHome/userHome.jsx';
import ShoppingList from './components/shoppingList/shoppingList.jsx';
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
      <Route path="/" component={App}/>
      <Route path="/signIn" component={SignIn}/>
      <Route path="/signUp" component={SignUp}/>
      <Route path="/tripDetails" component={TripDetails}/>
      <Route path="/gearViewMaker" component={GearViewMaker}/>
      <Route path="/tripDetails" component={TripDetails}/>
      <Route path="/termsMaker" component={TermsMaker}/>
      <Route path="/termsUser" component={TermsUser}/>
      <Route path="/userHome" component={UserHome}/>
      <Route path="/shoppingList" component={ShoppingList}/>
    </Router>
    <button onClick={signOut}>Sign Out</button>
  </div>
  ), document.getElementById('app'))