import React from 'react';
import $ from 'jquery';

class Borrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      }
    };

    //bind functions to class
    //this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleContentChange = this.handleContentChange.bind(this);
    // this.handleCategoryChange = this.handleCategoryChange.bind(this);
    // this.addCategory = this.addCategory.bind(this);
    // this.addContent = this.addContent.bind(this);

  handleSubmit(e) {

  }

  componentDidMount() {
    // $.ajax({
    //   type: "GET",
    //   url: '/terms/user',
    // }).done(function(data){
    //   console.log(data);
    //   var currState = this.state;
    //   currState.terms = data;
    //   this.setState({currState});
    //   console.log('successful get from terms');
    // }).fail(function(){
    //   console.log('failed to get from terms');
    // });
  }

  render() {
    return (
      <div>
        <h1> Borrow </h1>
        <Items/>
      </div>
    );
  }
}

// submit all content at the end

let Items = ({}) => {

    return (
      <div>
      <h3> Items </h3>
      </div>
    )
    
}


export default Borrow