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

    var context = this;

    $.ajax({
      type: "GET",
      url: '/terms/user/1',
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