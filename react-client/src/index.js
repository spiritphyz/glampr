import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, hashHistory } from 'react-router'

import App from './components/App.jsx';

import SignIn from './components/SignIn/signIn.jsx';

import TripDetails from './components/TripDetails/tripDetails.jsx';
import GearViewMaker from './components/gearList/gearMakerView.jsx';

import TermsMaker from './components/Terms/termsMaker.jsx'
import TermsUser from './components/Terms/termsUser.jsx'

import UserHome from './components/UserHome/userHome.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/SignIn" component={SignIn}/>
    <Route path="/TripDetails" component={TripDetails}/>
    <Route path="/GearViewMaker" component={GearViewMaker}/>
    <Route path="/TripDetails" component={TripDetails}/>
    <Route path="/termsmaker" component={TermsMaker}/>
    <Route path="/TermsUser" component={TermsUser}/>
    <Route path="/UserHome" component={UserHome}/>
  </Router>
  ), document.getElementById('app'))