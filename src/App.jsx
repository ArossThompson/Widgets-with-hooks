import React, { useEffect, useState } from 'react';

// Components
import Accordion from './components/Accordion';
import ColourInput from './components/ColourInput';
import Counter from './components/Counter';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

// Utils
import { items, options } from './utils/constants'

export default () => {
    const [selected, setSelected] = useState(options[0]);

    return <div>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>;
};