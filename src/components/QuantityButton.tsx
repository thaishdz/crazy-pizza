export default function QuantityButton(props) {
  return (
    <>
    <div className="flex items-center border-2 rounded-lg overflow-hidden">
      <button
        className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 focus:outline-none cursor-pointer"
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
    </>
  );
}