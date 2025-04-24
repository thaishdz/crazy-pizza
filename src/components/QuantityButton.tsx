import { useState } from 'react';

function QuantityButton() {
    
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(prevCount => Math.max(0, prevCount - 1))
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <>
    <div className="flex items-center border-2 rounded-lg overflow-hidden">
            <button
              className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 focus:outline-none"
              onClick={handleDecrement}
              aria-label="Decrementar"
            >
              -
            </button>
            <span className="px-4 py-2 w-10 text-center">{count}</span>
            <button
              className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 focus:outline-none"
              onClick={handleIncrement}
              aria-label="Incrementar"
            >
              +
            </button>
          </div>
    </>
  );
}

export default QuantityButton;