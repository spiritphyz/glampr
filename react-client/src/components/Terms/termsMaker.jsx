import React from 'react';

class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryCount: 1,
      categoryContentCount: {},
      inputs: {
        /*category0 : { 
          title: abcde
          content0: val
          content1: val
          }
        */
      }
    };

    //bind functions to class
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.addContent = this.addContent.bind(this);
  }

  handleSubmit(e) {
    console.log(e.target.id, ':', this.state[e.target.id])
  }

  handleContentChange(e) {
    var categoryName = e.target.getAttribute('data-categoryname');
    var contentName = e.target.getAttribute('data-contentname');
    var inputs = this.state.inputs;
    var contentVal = e.target.value;
    inputs[categoryName][contentName] = contentVal;
    console.log(inputs);
    this.setState({inputs})
  }

  handleCategoryChange(e) {
    var categoryName = e.target.getAttribute('data-categoryname');
    var contentName = e.target.getAttribute('data-contentname');
    var inputs = this.state.inputs;
    var categoryTitle = e.target.value;
    inputs[categoryName] = inputs[categoryName] || {};
    inputs[categoryName].title = categoryTitle;
    console.log(inputs);
    this.setState({inputs})
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

  addContent (categoryName) {
    var count = this.state.categoryContentCount[categoryName] || 1;
    count = count + 1;
    var obj = this.state.categoryContentCount;
    obj[categoryName] = count;
    this.setState({obj});
  }

  render() {
    return (
      <div>
        <Categories 
          categoryCount = {this.state.categoryCount} 
          categoryContentCount={this.state.categoryContentCount}
          addContent={this.addContent}
          handleCategoryChange={this.handleCategoryChange}
          handleContentChange={this.handleContentChange}
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
    var categoryName = `category${i}`; 

    children.push( <Category 
      key={i} 
      categoryName={categoryName} 
      categoryContentCount={props.categoryContentCount}
      addContent={props.addContent}
      handleCategoryChange={props.handleCategoryChange}
      handleContentChange={props.handleContentChange}
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
  var count = props.categoryContentCount[props.categoryName] || 1;
  var children = [];


  for (var i = 0; i < count; i++) {
    var contentName = `content${i}`;
    children.push(<Content 
      key={i} 
      handleContentChange = {props.handleContentChange} 
      categoryName = {props.categoryName}
      contentName = {contentName}
      />)
  }
      return (
        <div>
        <input 
          type="text" 
          placeholder="Category"
          data-categoryname= {props.categoryName}
          onChange={props.handleCategoryChange}
        />

        {children}
        <button id="addContent" onClick = {function () {props.addContent(props.categoryName)}}> Add content </button> 

      </div>
    )
}

var Content = (props) => {
  return (
    <div>
    <input 
      type="text" 
      placeholder="Content"
      data-categoryname= {props.categoryName}
      data-contentname= {props.contentName}
      onChange={props.handleContentChange} 
    />
    </div>
  )
}

export default Terms