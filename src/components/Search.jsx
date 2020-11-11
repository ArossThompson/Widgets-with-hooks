import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json', 
          srsearch: term,
        }
      });
      setResults(data.query.search);
    }

    const timeoutId = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500)

    return () => {
      clearTimeout(timeoutId);
    }
  }, [term]);
 
  const renderedResults = results.map((results) => {
    return (
      <div className="item" key={results.pageid}>
        <div className="right floated conten">
          <a href={`https://en.wikipedia.org?curid=${results.pageid}`} target="_blank" className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">
            {results.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: results.snippet }}></span>
        </div>
      </div>
    )
  })

  return <div>
    <div className="ui form">
      <div className="field">
        <label htmlFor="">Enter Search Term</label>
        <input 
          type="" 
          value={term}
          className="input"
          onChange={(e) => {setTerm(e.target.value)}}
        />
      </div>
    </div>
    <div className="ui celled list">
      {renderedResults}
    </div>
  </div>
}

export default Search;