import React, { useEffect, useState } from 'react';

// Components
import Accordion from './components/Accordion';
import ColourInput from './components/ColourInput';
import Counter from './components/Counter';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

// Utils
import { items, options } from './utils/constants'

const showAccordion = () => {
  if (window.location.pathname === "/accordion") {
    return <Accordion items={items}/>
  }
}

export default () => {
    // Dropdown selection state
    const [selected, setSelected] = useState(options[0]);

    return (
      <div>
        <Header />
        <Route path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            label="Select a colour"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    );
};