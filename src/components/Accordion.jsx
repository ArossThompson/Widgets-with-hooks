import React, { useEffect, useState } from 'react';

const Accordion = ({ items }) => {
  // hooks setup for setting title
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTitle, setActiveTitle] = useState(null);

  useEffect(() => {
    console.log('The Accordion component has mounted');
  })

  // function that invokes the change of change of state for the active title using the setting function defined in the hook setup
  const onTitleClick = (index, title) => {
    index !== activeIndex ? setActiveIndex(index) : setActiveIndex(null);
    setActiveTitle(title);
  }


  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return <React.Fragment key={index}>
      <div 
        className={`title ${active}`}
        onClick={() => onTitleClick(index, item.title)}
      >
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className={`content ${active}`}>
        <p>{item.content}</p>
      </div>
    </React.Fragment>
  })

  return <div className="ui styled accordion">
    {renderedItems}
  </div>
}; 

export default Accordion;