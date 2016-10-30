import React from 'react';
import { Link } from 'react-router'

const SideBar = (props) => {
  console.log(props, 'sidebar props')
    if ( props.views === 'user' ) {
        return ( <div className="navBar">    
          <li><Link to="/SignIn">Sign In</Link></li>
          <li><Link to="/SignUp">Sign Up</Link></li>
          <li><Link to="/TermsUser">Terms User</Link></li>
          <li><Link to="/TripDetailsUser">Trip Details User</Link></li>
          <li><Link to="/ShoppingList">Shopping List</Link></li>
        </div> )
    }
    if ( props.views === 'maker' ) {
        return (
        <div className="navBar">    
          <li><Link to="/SignIn">Sign In</Link></li>
          <li><Link to="/SignUp">Sign Up</Link></li>
          <li><Link to="/TripDetailsMaker">Trip Details Maker</Link></li>
          <li><Link to="/GearViewMaker">Gear View Maker</Link></li>
          <li><Link to="/TermsMaker">Terms Maker</Link></li>
        </div>
        )
    } else {
        return (<div>Please Wait!</div>)
    }
}

export default SideBar;