import React from 'react';
import $ from 'jquery';

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
    if ( e.target.id = 'user-acceptance') {
      currState.acceptance = true;
    } else {
      currState.acceptance = false;
    }
    $.ajax({
      type: "POST",
      url: '/termsUser',
      data: true
    }).done(function(){
      window.location = window.location.pathname + '#/ShoppingList';
      console.log('successful post from terms');
    }).fail(function(){
      console.log('failed to post from terms');
    });
  }

  componentDidMount() {

    var context = this;

    $.ajax({
      type: "GET",
      url: '/termsUser',
    }).done(function(data){

      let termsStore = {};

      data.forEach(function(content) {
        termsStore[content.category] = termsStore[content.category] || [];
        termsStore[content.category].push(content.description);
      });

      context.setState({terms: termsStore});

    }).fail(function(){
      console.log('failed to get from terms');
    });
  }


  render() {

    return (
      <div className="container center">
        <h1> User T&Cs </h1>
          <div>
            {Object.keys(this.state.terms).map((key, i) => {
             return <Category key={i} category={key} terms={this.state.terms[key]}/>
            })}
          </div>
        <h2> Stoked? Click on the button below to join the trip </h2>
        <div className="user-acceptance">
          <button id="user-acceptance" onClick={this.handleSubmit}> Count me in! </button>
          <button id="user-decline" onClick={this.handleSubmit}> Count me out! </button>
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
          {props.terms.map((term, i) => {
            return <Term key={i} term={term}/>
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