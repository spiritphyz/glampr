import React from 'react';

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryCount: 1,
      categoryContentCount: {},
      inputs: {
        //category-name : [content1, content2, content3]
      }
    };

    //bind functions to class
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.addContent = this.addContent.bind(this);
  }

  handleSubmit(e) {
    console.log(e.target.id, ':', this.state[e.target.id])
  }

  handleChange(e) {
    console.log(e);
    var inputs = this.state.inputs;
    //inputs[] =  || [];
  }

  componentWillMount() {
    // this.intitialize().then(function(data) {
    //   that.setState({somethingWithData});
    // });
  }

  addCategory () {
    var count = this.state.categoryCount + 1;
    this.setState({categoryCount: count});
  }

  addContent (id) {
    //var categoryID =  
    var count = this.state.categoryContentCount[id] || 1;
    count = count + 1;
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
          handleChange={this.handleChange}
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
    children.push( <Category 
      key={i} 
      id={i} 
      categoryContentCount={props.categoryContentCount}
      addContent={props.addContent}
      handleChange={props.handleChange}
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
    children.push(<Content key={i} handleChange={props.handleChange} />)
  }
      return (
        <div>
        <input 
          type="text" 
          placeholder="Category"
          id= {props.id}
          onChange={props.handleChange}
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