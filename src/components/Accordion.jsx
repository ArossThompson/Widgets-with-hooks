import React, { useState } from 'react';

const Accordion = ({ items }) => {
  // hooks setup for setting title
  const [activeIndex, setActiveIndex] = useState(items[0].title);
  const [activeTitle, setActiveTitle] = useState(null);
  console.log(activeIndex, activeTitle);

  // function that invokes the change of change of state for the active title using the setting function defined in the hook setup
  const onTitleClick = (index, title) => {
    setActiveIndex(index);
    setActiveTitle(title);
  }


  const renderedItems = items.map((item, index) => {
    return <React.Fragment key={item.title}>
      <div 
        className="title active"
        onClick={() => onTitleClick(index, item.title)}
      >
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className="content active">
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  })

  return <div className="ui styled accordion">
    {renderedItems}
    <h1>{activeIndex}</h1>
    <h2>{activeTitle}</h2>
  </div>
}; 

export default Accordion;