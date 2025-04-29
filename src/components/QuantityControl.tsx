
interface QuantityControlProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function QuantityControl(props: QuantityControlProps) {
  
  return (
     <div className="flex rounded-md overflow-hidden shadow-md">
      <button
       className={`px-4 py-2 font-bold text-white ${
        props.count === 0
          ? 'bg-red-100 cursor-not-allowed'
          : 'bg-red-500 hover:bg-red-600'
      }`}
        disabled={props.count === 0}
        onClick={props.onDecrement}
        aria-label="Decrementar"
        
      >
        -
      </button>
      <span className="px-4 py-2 w-10 text-center">{props.count}</span>
      <button
        className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 focus:outline-none cursor-pointer"
        onClick={props.onIncrement}
        aria-label="Incrementar"
      >
        +
      </button>
    </div>

  );
}