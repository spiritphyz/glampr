import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App.jsx';

import SignIn from './components/Auth/signIn.jsx';
import SignUp from './components/Auth/signUp.jsx';

import TripDetails from './components/TripDetails/tripDetails.jsx';
import GearViewMaker from './components/gearList/gearMakerView.jsx';

import TermsMaker from './components/Terms/termsMaker.jsx'
import TermsUser from './components/Terms/termsUser.jsx'

import UserHome from './components/UserHome/userHome.jsx';
import ShoppingList from './components/ShoppingList/ShoppingList.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/SignIn" component={SignIn}/>
    <Route path="/SignUp" component={SignUp}/>
    <Route path="/TripDetails" component={TripDetails}/>
    <Route path="/GearViewMaker" component={GearViewMaker}/>
    <Route path="/TripDetails" component={TripDetails}/>
    <Route path="/termsmaker" component={TermsMaker}/>
    <Route path="/TermsUser" component={TermsUser}/>
    <Route path="/UserHome" component={UserHome}/>
    <Route path="/ShoppingList" component={ShoppingList}/>
  </Router>
  ), document.getElementById('app'))