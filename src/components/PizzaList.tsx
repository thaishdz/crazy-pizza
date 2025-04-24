
import pizzaPic from '../assets/pizza.jpg';
import QuantityButton from './QuantityButton';

function PizzaList({pizza}) {

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
          <QuantityButton  />
          </div>
        </div>
    </div>
  )
}


export default PizzaList;