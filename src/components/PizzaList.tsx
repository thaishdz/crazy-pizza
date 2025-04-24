
import pizzaPic from '../assets/pizza.jpg';

function PizzaList({pizza}) {

  function handleDecrement() {
    console.log(`${pizza.name} added!`);
  }

  function handleIncrement() {
    console.log(`${pizza.name} added!`);
  }

  return (
    <div className='max-w-md mx-auto mt-4'>
        <div className='flex items-center gap-4 border-2 p-4'>
            <img src={pizzaPic} alt="Pizza" className="w-20 h-20 object-cover rounded-full" />
          <div>
            <h1 className='text-2xl font-bold'>{pizza.name}</h1>
            <p className='text-gray-500 italic mt-2'>{pizza.description}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className='text-lg mb-2 font-bold'>{pizza.price}€</p>
            <div className="flex items-center border-2 rounded-lg overflow-hidden">
            <button
              className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 focus:outline-none"
              onClick={handleDecrement}
              aria-label="Decrementar"
            >
              -
            </button>
            <span className="px-4 py-2 w-10 text-center">0</span>
            <button
              className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 focus:outline-none"
              onClick={handleIncrement}
              aria-label="Incrementar"
            >
              +
            </button>
          </div>
          </div>
        </div>
    </div>
  )
}


export default PizzaList;