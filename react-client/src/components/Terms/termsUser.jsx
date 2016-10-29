import React from 'react';
import $ from 'jquery';

  var mockData =  [
    {
      "id": 1,
      "category": "payment",
      "description": "pay $50",
      "createdAt": "2016-10-28T05:15:38.000Z",
      "updatedAt": "2016-10-28T05:15:38.000Z",
      "trip_id": 1
    },
    {
      "id": 2,
      "category": "payment",
      "description": "be ready to pay more",
      "createdAt": "2016-10-28T05:15:38.000Z",
      "updatedAt": "2016-10-28T05:15:38.000Z",
      "trip_id": 1
    },
    {
      "id": 3,
      "category": "workout",
      "description": "you must be able to climb stairs",
      "createdAt": "2016-10-28T05:15:38.000Z",
      "updatedAt": "2016-10-28T05:15:38.000Z",
      "trip_id": 1
    }
  ];


class TermsUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptance: false,
      terms: {}
    }

  };


  handleSubmit(e) {
    var currState = this.state;
    currState.acceptance = true;
    $.ajax({
      type: "POST",
      url: '/terms/user',
      data: this.state.acceptance
    }).done(function(){
      console.log('successful post from terms');
    }).fail(function(){
      console.log('failed to post from terms');
    });
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: 'localhost/terms/user/1',
    }).done(function(data){

      console.log('successful get from terms');

    }).fail(function(){
      console.log('failed to get from terms');
    });

    let termsStore = {};

    mockData.forEach(function(content) {
      termsStore[content.category] = termsStore[content.category] || [];
      termsStore[content.category].push(content.description);
    });

    var currState = this.state
    currState.terms = termsStore;
    this.setState(currState);

  }


  render() {

    return (
      <div>
        <h1> User T&Cs </h1>
          <div>
            {Object.keys(this.state.terms).map(key => {
             return <Category category={key} terms={this.state.terms[key]}/>
            })}
          </div>
        <h2> Stoked? Click on the button below to join the trip </h2>
        <div className="user-acceptance">
          <button id="user-acceptance" onClick={this.handleSubmit}> Count me in! </button>
        </div>
      </div>
    );
  }
}

// submit all content at the end

let Category = (props) => {
  return (  
      <div>
        <h2> {props.category} </h2>
        <ul>
          {props.terms.map(term => {
            return <Term term={term}/>
          })}
        </ul>
      </div>
  ) 
}

let Term = (props) => {
  return (  
      <li>
        <h3> {props.term} </h3>
      </li>
    ) 
}


export default TermsUser