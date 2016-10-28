import React from 'react'

const GearTabMaker = ({ setTabView, tabs, addTab, handleChange, gearCategory }) => {
  
  return (
    <div className ="tabBar">
    { Object.keys(tabs).map(function(tab, i) {return <button id={ tab } key={ i } className="gearTab" onClick={ setTabView }>{ tab }</button>}) }
      <div>
      <button data-gearCategory={ gearCategory } id="btn-addTab" onClick={ addTab }>
        Add Category
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

