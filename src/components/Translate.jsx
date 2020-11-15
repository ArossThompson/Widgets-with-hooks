import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

// Utils
import { languages } from '../utils/constants'

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);


  return (
      <div>
        <Dropdown
          label="Select a language"
          options={languages}
          selected={language}
          onSelectedChange={setLanguage}
        />
      </div>
    )
}

export default Translate;