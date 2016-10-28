import React from 'react';
import GearListMaker from './gearListMaker.jsx'
import GearTabMaker from './gearTabMaker.jsx'

const TabView = ({ groupInputChange, setTabView, appendInput, gearCategory, addTab, handleChange, currentTab, tabs, inputs }) => {
  const gearTab = (
    <GearTabMaker 
      tabs={ tabs }
      handleChange={ handleChange }
      addTab={ addTab }
      gearCategory={ gearCategory }
      setTabView = { setTabView }
    />)
  if( !currentTab ) {
    return (
      <div className="TabView">
        {gearTab}
      </div>
    )
  } else {
    return (
      <div className="TabView">
        { gearTab }
        <GearListMaker 
            appendInput={ appendInput } 
            handleChange={ groupInputChange } 
            inputs={ inputs }

          />
      </div>
    )
  }
}


export default TabView;

