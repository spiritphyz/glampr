import React from 'react';
import $ from 'jquery';

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      }
    };

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
        <h1> Shopping List </h1>
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


export default ShoppingList