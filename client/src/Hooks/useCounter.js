import React, { useState } from 'react';

export default function useProductCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    if (count > 0) setCount((prevCount) => prevCount - 1);
    else return 0;
  }
  return {
    count,
    increment,
    decrement,
  };
}
