import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Contador</h2>
      <p className="text-lg mb-4">El valor actual es: {count}</p>
      <button
        onClick={increment}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Incrementar
      </button>
    </div>
  );
};

export default Counter;