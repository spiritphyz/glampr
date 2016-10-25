import React, { Component } from 'react';
import TabView from './tabView.jsx'
class GearListMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInputs: ['personal-input-0'],
      groupInputs: ['group-input-0']
    };
    this.appendGroupInput = this.appendGroupInput.bind(this);
    this.appendPersonalInput = this.appendPersonalInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.id, ':', e.target.value)
    this.setState({ [e.target.id]: e.target.value })
  }
  appendGroupInput() {
      var newInput = `group-input-${this.state.groupInputs.length}`;
      this.setState({ groupInputs: this.state.groupInputs.concat([newInput]) });
  }
  appendPersonalInput() {
    console.log(this.state)
      var newInput = `personal-input-${this.state.personalInputs.length}`;
      this.setState({ personalInputs: this.state.personalInputs.concat([newInput]) });

    console.log(this.state)
  }
  render() {
    const {personalInputs, groupInputs} = this.state;
    const {appendPersonalInput, appendGroupInput, handleChange} = this;

    return (
      <div>
      Personal Gear Requirements
        <TabView 
          className="personalGear"
          inputs={personalInputs}
          appendInput={appendPersonalInput}
          handleChange={handleChange}
        />
        <div>
        Group Gear Requirements
        <TabView 
          className="groupGear"
          inputs={groupInputs}
          appendInput={appendGroupInput}
          handleChange={handleChange}
        />
        </div>
      </div>
    );
  }
}

export default GearListMaker;