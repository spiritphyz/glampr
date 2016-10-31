import React from 'react';
import { Link, Router, Navigation } from 'react-router';
import $ from 'jquery';


const Main = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <div className="card">
          <img className="img-fluid card-img-top" src="images/great-outdoors/sunset-south-dakota.jpg" alt="Card image cap" />
          <div className="card-block">
            <h4 className="text-xs-center light-green card-title">Get your trips organized without the fuss.</h4>
            <hr className="my-1" />
            <p className="text-xs-center card-text">Happy Campr lets you create gear lists for your camp crew where they'll get notified of what to bring for an awesome adventure outdoors.</p>
            <p className="text-xs-center">
            <Link to="/SignUp"><button className="btn btn-warning btn-lg">Sign Up Now</button></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;