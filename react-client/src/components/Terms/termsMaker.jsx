import React from 'react';


/* Hierachy
  - Categories
    - Content
    - Additional Content
  - Additional Categories
  - Buttons
*/

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryCount: 1,
      categoryContentCount: {
        //categoryID : contentCount
        '0': 2,
        '1': 2
      }
    };
    //anytime you bind a function to this - do it here in this way -
    // bind only runs once on intializations, and not each render
    // this.intitialize = this.intitialize.bind(this);

    //bind functions to class
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.addContent = this.addContent.bind(this);
  }
  // intitialize() {
  //   // return new Promise(function(resolve, reject) {
  //     // $.get(someUrl, function(data) {
  //     //   resolve(data);
  //     // });
  //   // });
  // }
  handleChange(e) {
    //this.setState({ [e.target.id]: e.target.value })
    //console.log(e.target.value, e.target.id, this.state);
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

  addContent (id) {
    //var categoryID =  
    var count = this.state.categoryContentCount[id] || 1;
    count = count + 1;
    //console.log(id);
    // this.setState({
    //   categoryContentCount: {
    //     [id]: count
    //   } 
    // });
    var obj = this.state.categoryContentCount;
    obj[id] = count;
    this.setState({obj});
  }

  render() {
    return (
      <div>
        <Categories 
          categoryCount = {this.state.categoryCount} 
          categoryContentCount={this.state.categoryContentCount}
          addContent={this.addContent}
          />
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
    children.push(<Category key={i} id={i} 
      categoryContentCount={props.categoryContentCount}
      addContent={props.addContent}
      />);
  }

    return (
      <div>
      <h3> categories </h3>
      {children}
      </div>
    )
    
}


var Category = (props) => {
  var count = props.categoryContentCount[props.id] || 1;
  var children = [];

  for (var i = 0; i < count; i++) {
    children.push(<Content key={i} />)
  }
      return (
        <div>
        <input 
          type="text" 
          placeholder="Category"
          id= {props.id}
          //onChange={props.handleChange} 
        />

        {children}
        <button id="addContent" onClick = {function () {props.addContent(props.id)}}> Add content </button> 

      </div>
    )
}

var Content = (props) => {
  return (
    <div>
    <input 
      type="text" 
      placeholder="Content"
      id= "Content"
      onChange={props.handleChange} 
    />
    </div>
  )
}

var Form = (props) => {
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


export default Terms