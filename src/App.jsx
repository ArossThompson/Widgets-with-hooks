import React, { useEffect, useState } from 'react';

// Components
import Accordion from './components/Accordion';
import ColourInput from './components/ColourInput';
import Counter from './components/Counter';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

// Utils
import { items, options, languages } from './utils/constants'

export default () => {
    return (
      <div>
        <Translate />
      </div>
    );
};