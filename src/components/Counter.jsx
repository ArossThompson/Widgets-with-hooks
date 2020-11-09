import React, { useState } from 'react';

const Counter = () => {

  // useState used to set default state of count to 0 and create function for updating it
  const [currentCount, updateCurrentCount] = useState(0);

  const updateCount = () => {
    updateCurrentCount(currentCount + 1);
  }

  return <div>
    <button onClick={() => updateCount()}>Add to the count</button>
    <p>The current count is {currentCount}</p>
  </div>
}

export default Counter;