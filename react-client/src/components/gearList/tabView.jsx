import React from 'react';
import GearListMaker from './gearListMaker.jsx'
import GearTabMaker from './gearTabMaker.jsx'

const TabView = ({ appendInput, handleChange, handleTabSubmit, tabs, inputs, gearCategory }) => (
  <div className="GearListInTab">
    <GearTabMaker 
      tabs={ tabs }
      handleChange={ handleChange }
      handleTabSubmit={ handleTabSubmit }
      gearCategory={ gearCategory }
    />

    <GearListMaker 
      appendInput={ appendInput } 
      handleChange={ handleChange } 
      inputs={ inputs }
    />
  </div>
)


export default TabView;