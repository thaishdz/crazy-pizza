import { useState, useEffect } from 'react';
import pizzaPic from '../assets/pizza.jpg';
import QuantityButton from './QuantityButton';

interface PizzaCardProps {
  pizza: {
      id: number;
      name: string;
      description: string;
      price: number;
  };
  onQuantityChange: (pizzaId: number, pizzaTotalPrice: number) => void;
}

export default function PizzaCard({pizza, onQuantityChange}: PizzaCardProps) {

  const [count, setCount] = useState(0); // 1. elevaste el estado desde el child component QuantityButton

  const handleDecrement = () => {
    setCount(prevCount => Math.max(0, prevCount - 1));
  };

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    const totalPrice = pizza.price * count;
    onQuantityChange(pizza.id, totalPrice);
  },[count, pizza.id, pizza.price, onQuantityChange]);

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
            <QuantityButton  // 2. y se lo pasaste como prop
              count={count} 
              onIncrement={handleIncrement} // evento "onIncrement" que se dispara desde el componente hijo hacia el padre.
              onDecrement={handleDecrement}
            /> 
          </div>
      </div>
    </div>
  )
}