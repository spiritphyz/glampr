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

    //bind functions to class
    //this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleContentChange = this.handleContentChange.bind(this);
    // this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.addCategory = this.addCategory.bind(this);
    // this.addContent = this.addContent.bind(this);

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
      url: '/terms/user',
    }).done(function(data){
      console.log(data);
      var currState = this.state;
      currState.terms = data;
      this.setState({currState});
      console.log('successful get from terms');
    }).fail(function(){
      console.log('failed to get from terms');
    });
  }

  render() {
    return (
      <div>
        <h1> User T&Cs </h1>
        <Terms terms={this.state.terms}/>
        <div className="user-acceptance">
          <button id="user-acceptance" onClick={this.handleSubmit}> Accept </button>
        </div>
      </div>
    );
  }
}

// submit all content at the end

let Terms = ({}) => {

    return (
      <div>
      <h3> Terms </h3>
      </div>
    )
    
}


export default TermsUser