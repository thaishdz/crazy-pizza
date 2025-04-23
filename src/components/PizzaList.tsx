
import pizzaPic from '../assets/pizza.jpg';

function PizzaList({pizza}) {
  return (
    <div className='max-w-md mx-auto mt-4'>
        <div className='flex items-center gap-4 border-2 p-4'>
            <img src={pizzaPic} alt="Pizza" className="w-20 h-20 object-cover rounded-full" />
            <div>
          <h1 className='text-2xl font-bold'>{pizza.name}</h1>
          <p className='text-gray-500 italic mt-2'>{pizza.description}</p>
          <p className='text-lg mt-2 font-bold'>{pizza.price}$</p>
            </div>
            <button className='focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900' onClick={() => alert('Pizza 1 added to cart!')}>Add</button>
        </div>
    </div>
  )
}


export default PizzaList;