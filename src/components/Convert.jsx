import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
  const [conversion, setConversion] = useState('');

  useEffect(() => {
    const convert = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          "key": "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          "q": text,
          "source": "en",
          "target": language,
          "format": "text"
        }
      })

      setConversion(data.data.translations[0].translatedText);
    }

    const conversionTimeout = setTimeout(() => {
      convert();
    }, 1000)

    return () => {
      clearTimeout(conversionTimeout);
    }
    

  }, [text, language])

  return <h1 className="ui header">{conversion}</h1>

}

export default Convert;