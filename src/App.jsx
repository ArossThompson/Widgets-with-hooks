import React from 'react';
import Accordion from './components/Accordion';
import ColourInput from './components/ColourInput';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front-end javascript framework'
  },
  {
    title: 'Why use React',
    content: 'Because it\'s great'
  },
  {
    title: 'How do you use React',
    content: 'By creating components'
  },
]

const colour = "Green";

export default () => {
    return <div>
      <Accordion
        items={items}
      />
    </div>;
};