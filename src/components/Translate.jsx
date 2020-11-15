import React, { useEffect, useState } from 'react';
import Dropdown from './Dropdown';

// Utils
import { languages } from '../utils/constants'

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState('');


  return (
      <div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="">Enter Text</label>
            <input value={text} type="text" onChange={(e) => {setText(e.target.value)}}/>
          </div>
        </div>
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