import React, { useEffect, useState } from 'react';

const Dropdown = ({ options, selected, onSelectedChange}) => {
  const [openOrClosed, setOpenOrClosed] = useState(false);
  
  const renderedOptions = options.map((option, index) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div 
        className="item" 
        key={index}
        onClick={() => {
          onSelectedChange(option)
        }}
      >
        {option.label}
      </div>
    )
  });

  return (
    <div className="ui form">
      <div className="field">
        <label htmlFor="" className="label">Select a color:</label>
        <div className={`ui selection dropdown ${openOrClosed ? 'visible active' : ''}`} onClick={()=> {setOpenOrClosed(!openOrClosed)}}>
          <i className="dropdown icon"></i>
          <div className="text" >{selected.label}</div>
          <div className={`menu ${openOrClosed ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;