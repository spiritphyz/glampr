import React from 'react';

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryCount: 1
    };
    //anytime you bind a function to this - do it here in this way -
    // bind only runs once on intializations, and not each render
    // this.intitialize = this.intitialize.bind(this);

    //bind functions to class
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCategory = this.addCategory.bind(this);
  }
  // intitialize() {
  //   // return new Promise(function(resolve, reject) {
  //     // $.get(someUrl, function(data) {
  //     //   resolve(data);
  //     // });
  //   // });
  // }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
    console.log(e.target.value, e.target.id, this.state);
  }
  handleSubmit(e) {
    console.log(e.target.id, ':', this.state[e.target.id])
  }
  componentWillMount() {
    // this.intitialize().then(function(data) {
    //   that.setState({somethingWithData});
    // });
  }
  //add a new category
  addCategory () {
   var count = this.state.categoryCount + 1;
   this.setState({categoryCount: count});
  }

  addContent () {
  }

  render() {
    return (
      <div>
        <Categories categoryCount = {this.state.categoryCount}/>
        <Buttons
          handleSubmit = {this.handleSubmit}
          addCategory = {this.addCategory}
        />
      </div>
    );
  }
}

// submit all content at the end
var Buttons = (props) => {
  return (
    <div>
      <h3> buttons </h3>
      <button id="submit" onClick={props.handleSubmit}> Submit </button>
      <button id="addCategory" onClick={props.addCategory}> Add category </button>
    </div>
  )
}

var Categories = (props) => {

  var count = props.categoryCount;
  var children = [];

  for (var i = 0; i < count; i++) {
    children.push(<Category number={i}/>);
  }

    return (
      <div>
      <h3> categories </h3>
      {children}
      </div>
    )
    
}


var Category = (props) => {
      return (
        <div>
        <input 
          type="text" 
          placeholder="Category"
          id= "Cat1"
          onChange={props.handleChange} 
        />

        <Content />
        <button id="addContent" onClick={props.addContent}> Add content </button> 

      </div>
    )
}

var Content = (props) => {
  return (
    <div className="segment-content">
      <input 
      type="text" 
      placeholder="Your message here"
      id="content"
      onChange={props.handleChange} 
      />
    </div>
  )
}


// var Category = (props) => {
//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="Category"
//         id= "Cat1"
//         onChange={props.handleChange} 
//       />
//       <button id="Category" onClick={props.handleSubmit}> Submit </button>
//     </div>
//   )
// }

// var Content = (props) => {
//   return (
//     <div>
//       <input 
//       type="text" 
//       placeholder="Your message here"
//       id="content"
//       onChange={props.handleChange} 
//       />
//       <button onClick={props.handleSubmit}> Submit </button>
//     </div>
//   )
// }


export default Terms