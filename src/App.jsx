import React from 'react';

// Components
import Accordion from './components/Accordion';
import ColourInput from './components/ColourInput';
import Counter from './components/Counter';

// Utils
import { items } from './utils/constants'



const colour = "Green";

export default () => {
    return <div>
      <Accordion
        items={items}
      />
    </div>;
};