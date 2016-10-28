import React, { Component } from 'react';
import TabView from './tabView.jsx'
class GearViewMaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPersonalTab: undefined, // holds the name of last clicked tab
      personalTabs: {}, // holds objects of list items for each tab
      currentGroupTab: undefined, // holds the name of last clicked tab
      groupTabs: {} //holds objects of list items for each tab
    };

    // bind this access for each function that needs access to parents state from child
    this.appendPersonalInput = this.appendPersonalInput.bind(this);
    this.appendGroupInput = this.appendGroupInput.bind(this);
    this.handleGroupInputChange = this.handleGroupInputChange.bind(this)
    this.handlePersonalInputChange = this.handlePersonalInputChange.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleTabSubmit = this.handleTabSubmit.bind(this);
    this.setTabView = this.setTabView.bind(this);
    this.getInputs = this.getInputs.bind(this);
  }
  // stores change on state - stored by the assigned html id of <input> element
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }
  // 1) finds the current tab in "group" section
  // 2) sets the new value of an <input> field to the corresponding
  //    labeled object property 'section-input-tab-listPosition'
  // 3) sets the state to match the newest collection of tabs
  handleGroupInputChange(e) {
    let currentTab = this.state.currentGroupTab;
    let groupTabs = this.state.groupTabs;
    groupTabs[currentTab][e.target.id] = e.target.value;
    this.setState({ groupTabs: groupTabs})
  }
  // see 123 above
  handlePersonalInputChange(e) {
    let currentTab = this.state.currentPersonalTab;
    let personalTabs = this.state.personalTabs;
    personalTabs[currentTab][e.target.id] = e.target.value;
    this.setState({ personalTabs: personalTabs})
  }
  // bug edge case where handle submit will take data from cross category inputs
  // i.e. personal input bar can end up in group.
  // buy entering groupOrPersonalTabs param we are able to use one function call 
  // for both sections - in this case accessing the tabs of 'group' or 'personal'
  handleTabSubmit(groupOrPersonalTabs) {
    return function(e) {
      let tabs = this.state[groupOrPersonalTabs]
      // if the current tab doesnt already exist - create a new empty object
      // in the correct tabs section with the correct name from *handleChange*
      // addTab comes from the *html id in listMaker*
        if( !tabs[this.state.addTab] ) {
          tabs[this.state.addTab] = {};
        }
      this.setState({[groupOrPersonalTabs]: tabs})
    }.bind(this);
  }
  appendPersonalInput() {
    //preparing info for access
    let currentTab = this.state.currentPersonalTab;
    let currentPosition = Object.keys(this.state.personalTabs[currentTab]).length + 1;
    // create a unique input id for parsing on backend - this listing will know which 
    // section, tab, and position it came from
    let newInput = `personal-input-${this.state.currentPersonalTab}-${currentPosition}`;
    let tabs = this.state.personalTabs;
    //update current tabs entry with latest input and set it to state
    tabs[currentTab][newInput] = this.state[newInput];
    this.setState({ personalTabs: tabs });
  }
  appendGroupInput() {
    //see personal above
    let currentTab = this.state.currentGroupTab;
    let currentPosition = Object.keys(this.state.groupTabs[currentTab]).length + 1;
    let newInput = `group-input-${this.state.currentGroupTab}-${currentPosition}`;
    let tabs = this.state.groupTabs;
    console.log('new input in append', tabs);
    tabs[currentTab][newInput] = this.state[newInput];
    this.setState({ groupTabs: tabs });
  }
  getInputs(tabs, tab) { 
  // takes 2 params group or personal tabs and tab
  // returns the inputs of that tab
  // currently set below to retrieve current tab list items
      return this.state[tabs][this.state[tab]]
  }
  // should render the appropriate tab
  // the appropriate tab is determined by the latest "tab button" clicked
  setTabView(groupOrPersonal) {
    return function(e) {
      this.setState({[groupOrPersonal]: e.target.id})
    }.bind(this);
  }
  render() {
    const { personalTabs,
      groupTabs,
      currentPersonalTab,
      currentGroupTab } = this.state;

    const { handleGroupInputChange,
      handlePersonalInputChange,
      getInputs,
      setTabView,
      handlePersonalTabSubmit,
      appendPersonalInput,
      appendGroupInput,
      handleChange,
      handleTabSubmit } = this;
    return (
      <div>
      Personal Gear Requirements
        <TabView 
          className="personalGear"
          addTab={handleTabSubmit('personalTabs')}
          inputs={getInputs('personalTabs', 'currentPersonalTab')}
          appendInput={appendPersonalInput}
          handleChange={handleChange}
          tabs={personalTabs}
          currentTab={currentPersonalTab}
          gearCategory="personal"
          setTabView={setTabView('currentPersonalTab')}
          groupInputChange = {handlePersonalInputChange}
        />
        Group Gear Requirements
        <TabView 
          className="groupGear"
          addTab={handleTabSubmit('groupTabs')}
          inputs={getInputs('groupTabs', 'currentGroupTab')}
          appendInput={appendGroupInput}
          handleChange={handleChange}
          tabs={groupTabs}
          currentTab={currentGroupTab}
          gearCategory="group"
          setTabView={setTabView('currentGroupTab')}
          groupInputChange = {handleGroupInputChange}
        />
      </div>
    );
  }
}

export default GearViewMaker;
