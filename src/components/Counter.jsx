import React, { useState } from 'react';

const Counter = () => {

  // useState used to set default state of count to 0 and create function for updating it
  const [currentCount, updateCurrentCount] = useState(0);

  const updateCount = (type) => {
    type === "add" ? updateCurrentCount(currentCount + 1) : updateCurrentCount(currentCount - 1);
  }

  return <div>
    <button onClick={() => updateCount("add")}>Add to the count</button>
    <p>The current count is {currentCount}</p>
    <button onClick={() => updateCount("subtract")}>Subtract from the count</button>
  </div>
}

export default Counter;