import React from 'react';

const TabView = (props) => {
  console.log(props)
  return (
    <div className="personalGear">
        <div id="dynamicInput">
          {props.inputs.map(input => <input 
            id= {input} 
            type="text" 
            onChange={props.handleChange}
          />)}
        </div>
      <div>
      <button onClick={ props.appendInput }>
          CLICK ME TO ADD AN INPUT
      </button>
      +sym
      </div>
    </div>
  )
}

export default TabView;