import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTitle, setActiveTitle] = useState(null);

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