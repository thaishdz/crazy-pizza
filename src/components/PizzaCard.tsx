import { useState, useEffect } from 'react';
import pizzaPic from '../assets/pizza.jpg';
import QuantityControl from './QuantityControl';


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
    // TODO: Crear componenents Card y CardContent
      <div className='max-w-md mx-auto mt-4'>
        <div className='flex items-center justify-between border-2 p-4 rounded-lg shadow-sm'>
          <img src={pizzaPic} alt="Pizza" className="w-20 h-20 object-cover rounded-full" />
    
          {/* Info de la pizza */}
          <div className="flex-1 mx-4">
            <div className="flex justify-between items-start">
              <h1 className='text-lg font-bold'>{pizza.name}</h1>
            </div>
            <p className='text-gray-500 italic text-sm mt-1'>{pizza.description}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
              <span className="font-mono font-bold">{pizza.price.toFixed(2)}€</span>
              <QuantityControl
                count={count}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
          </div>
        </div>
      </div>
    );
}