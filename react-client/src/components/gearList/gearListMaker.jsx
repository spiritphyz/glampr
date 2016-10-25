import React from 'react';
  const GearListMaker = ({inputs, handleChange, appendInput}) => {
   return (
    <div id="dynamicInput" className="gearWindow">
      { inputs.map(input => <input
        key= {input} 
        id= {input} 
        type="text" 
        onChange={ handleChange }
      />) }
      <div>
      <button onClick={ appendInput }>
          CLICK ME TO ADD AN INPUT
      </button>
      +sym
      </div>
    </div>
    )
  }

export default GearListMaker