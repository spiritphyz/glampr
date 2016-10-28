import React, { Component } from 'react';
import TabView from './tabView.jsx'
class GearViewMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPersonalTab: undefined, // renders this array of list items
      personalInputs: [],
      personalTabs: {},
      currentGroupTab: undefined, // renders this array of list items
      groupInputs: [],
      groupTabs: {} //holds arrays of list items in each tab
    };
    this.appendPersonalInput = this.appendPersonalInput.bind(this);
    this.appendGroupInput = this.appendGroupInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTabSubmit = this.handleTabSubmit.bind(this);
    this.setTabView = this.setTabView.bind(this)
  }
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }
  handleTabSubmit(groupOrPersonalTabs) {
    return function(e) {
      let tabs = this.state[groupOrPersonalTabs]
        if(!tabs[this.state.addTab]) {
          tabs[this.state.addTab] = [];
        }
      this.setState({[groupOrPersonalTabs]: tabs})
    }
  }
  appendPersonalInput() {
    let currentTab = this.state.currentPersonalTab;
    let newInput = `personal-input-${this.state.currentPersonalTab}-${this.state.personalTabs[currentTab].length + 1}`;
    let tabs = this.state.personalTabs;
    tabs[currentTab] = tabs[currentTab].concat(newInput);
    this.setState({ personalTabs: tabs });
  }
  appendGroupInput() {
    let currentTab = this.state.currentGroupTab;
    let newInput = `personal-input-${this.state.currentGroupTab}-${this.state.groupTabs[currentTab].length + 1}`;
    let tabs = this.state.groupTabs;
    tabs[currentTab] = tabs[currentTab].concat(newInput);
    this.setState({ groupTabs: tabs });
  }
  setTabView(groupOrPersonal) {
    return function(e) {
      this.setState({[groupOrPersonal]: e.target.id})
    }.bind(this);
  }
  render() {
    const {personalInputs, groupInputs, personalTabs, groupTabs, currentPersonalTab, currentGroupTab} = this.state;
    const {setTabView, handlePersonalTabSubmit, appendPersonalInput, appendGroupInput, handleChange, handleTabSubmit} = this;
    return (
      <div>
      Personal Gear Requirements
        <TabView 
          className="personalGear"
          addTab={handleTabSubmit('personalTabs')}
          inputs={personalInputs}
          appendInput={appendPersonalInput}
          handleChange={handleChange}
          tabs={personalTabs}
          currentTab={currentPersonalTab}
          gearCategory="personal"
          setTabView={setTabView('currentPersonalTab')}
        />
        Group Gear Requirements
        <TabView 
          className="groupGear"
          addTab={handleTabSubmit('groupTabs')}
          inputs={groupInputs}
          appendInput={appendGroupInput}
          handleChange={handleChange}
          tabs={groupTabs}
          currentTab={currentGroupTab}
          gearCategory="group"
          setTabView={setTabView('currentGroupTab')}
        />
      </div>
    );
  }
}

export default GearViewMaker;
      // currentGroupTab: '',
      // groupInputs: ['group-input-0'],
      // groupTabs: {}
// if(e.target.data-gearCategory === "group") {
//   let tabs = this.state.groupTabs
//   tabs.push(this.state[target])
//   this.setState({groupsTabs: tabs})
// } else {
  // this.appendGroupInput = this.appendGroupInput.bind(this);
  // 
  // appendGroupInput() {
  //   var newInput = `group-input${this.state.groupInputs.length}`;
  //   this.setState({ groupInputs: this.state.groupInputs.concat([newInput]) });
  // }
      // Group Gear Requirements
      //   <TabView 
      //     className="groupGear"
      //     inputs={groupInputs}
      //     appendInput={appendGroupInput}
      //     handleChange={handleChange}
      //     tabs={groupTabs}
      //     currentTab={currentGroupTab}
      //     gearCategory="group"
      //   />