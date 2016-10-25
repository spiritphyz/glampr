import React from 'react'

const GearTabMaker = ({ tabs, handleTabSubmit, handleChange, gearCategory }) => {
  return (
    <div>
      { tabs.map(function(tab) {return <button key={tab.toString()} className="gearTab">{ tab }</button>}) }
      <div>
      <button data-gearCategory={ gearCategory } id="btn-addTab" onClick={ handleTabSubmit }>
        Submit
      </button>
        <input
          id = "addTab"
          className = "addTab"
          type="text" 
          placeholder="Add Tab!"
          onChange={ handleChange }
          data-gearCategory={ gearCategory }
        />
      </div>
    </div>
  )
}

export default GearTabMaker