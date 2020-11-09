import React, { useState } from 'react';

const ColourInput = () => {
  // hooks setup for setting colour
  const [activeColour, setActiveColour] = useState("Green");
  
  
  // function that invokes the change of state for the active colour
  const onColourInput = (colour) => {
    setActiveColour(colour);
  }

  return <div>
    <div className="ui labeled input">
      <label className="ui label" htmlFor="colourInput">What is your favourite colour?</label>
      <input 
        type="text"
        name="colourInput"
        className="ui input"
        onChange={(e) => onColourInput(e.target.value)}
      />
      
    </div>
    
    <h3>My favourite colour is {activeColour}</h3>
  </div>
}

export default ColourInput;