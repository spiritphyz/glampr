import React, { Component } from 'react';
import TabView from './tabView.jsx'
class GearViewMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: '',
      personalInputs: ['personal-input-0'],
      personalTabs: [],
      groupInputs: ['group-input-0'],
      groupTabs: []
    };
    this.appendGroupInput = this.appendGroupInput.bind(this);
    this.appendPersonalInput = this.appendPersonalInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.id, ':', e.target.value, e.target.getAttribute('data-gearCategory'))
    this.setState({ [e.target.id]: e.target.value })
  }
  handleTabSubmit(e) {
    console.log(e.target.id,':', this.state[e.target.id]);
    let target = e.target.id.slice(3);
    if(e.target.data-gearCategory === "group") {
      let tabs = this.state.groupTabs
      tabs.push(this.state[target])
      this.setState({groupsTabs: tabs})
    } else {
      let tabs = this.state.personalTabs
      tabs.push(this.state[target])
      this.setState({personalTabs: tabs})
    }
  }
  appendGroupInput() {
    var newInput = `group-input${this.state.groupInputs.length}`;
    this.setState({ groupInputs: this.state.groupInputs.concat([newInput]) });
  }
  appendPersonalInput() {
    var newInput = `personal-input${this.state.personalInputs.length}`;
    this.setState({ personalInputs: this.state.personalInputs.concat([newInput]) });
  }
  render() {
    const {personalInputs, groupInputs, personalTabs, groupTabs} = this.state;
    const {appendPersonalInput, appendGroupInput, handleChange, handleTabSubmit} = this;

    return (
      <div>
      Personal Gear Requirements
        <TabView 
          className="personalGear"
          inputs={personalInputs}
          appendInput={appendPersonalInput}
          handleChange={handleChange}
          tabs={personalTabs}
          gearCategory="personal"
        />
      Group Gear Requirements
        <TabView 
          className="groupGear"
          inputs={groupInputs}
          appendInput={appendGroupInput}
          handleChange={handleChange}
          tabs={groupTabs}
          gearCategory="group"
        />
      </div>
    );
  }
}

export default GearViewMaker;