import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const search = async () => {
      await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json', 
          srsearch: term,
        }
      })
    }
    search();
  }, [term]);
 
  return <div>
    <div className="ui form">
      <div className="field">
        <label htmlFor="">Enter Search Term</label>
        <input 
          type="" 
          className="input"
          onChange={(e) => {setTerm(e.target.value)}}
        />
      </div>
    </div>
  </div>
}

export default Search;