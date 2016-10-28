import React from 'react';
import $ from 'jquery';

class TermsUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //inputs: false;
      }
    };

    //bind functions to class
    //this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleContentChange = this.handleContentChange.bind(this);
    // this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.addCategory = this.addCategory.bind(this);
    // this.addContent = this.addContent.bind(this);

  handleSubmit(e) {
    let submission = this.state.inputs;
    $.ajax({
      type: "POST",
      url: '/terms/user',
      data: submission
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
      this.setState({data})
      console.log('successful get from terms');
    }).fail(function(){
      console.log('failed to get from terms');
    });
  }

  render() {
    return (
      <div>
        <h1> User T&Cs </h1>
        <Categories 
          />
        <Buttons
          handleSubmit = {this.handleSubmit}
        />
      </div>
    );
  }
}

// submit all content at the end
let Buttons = ({handleSubmit}) => {
  return (
    <div>
      <h3> buttons </h3>
      <button id="submit" onClick={handleSubmit}> Submit </button>
    </div>
  )
}

let Categories = ({}) => {

    return (
      <div>
      <h3> categories </h3>
      <Category />
      </div>
    )
    
}


let Category = ({}) => {

      return (
        <div>
        <h1> category </h1>
      </div>
    )
}

let Content = ({}) => {
  return (
    <div>
    <h1> Content </h1>
    </div>
  )
}

export default TermsUser