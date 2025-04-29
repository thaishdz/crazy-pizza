import { useState, useMemo } from 'react';
import PizzaCard from './components/PizzaCard';
import PaymentMethod from "./components/PaymentMethod";

// Define el tipo para tu objeto pizza
interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  totalPrice?: number; // Precio total para esta pizza (opcional)
}

export default function App() {
  const [pizzaItems, setPizzaItems] = useState<Pizza[]>([
    { id: 1, name: "Margherita", description: "Classic pizza with tomato sauce and mozzarella cheese price", price: 8 },
    { id: 2, name: "Pepperoni", description: "Delicious pizza with pepperoni and cheese", price: 10 },
    { id: 3, name: "Hawaiian", description: "Classic pizza with ham, pineapple, and mozzarella cheese", price: 12 }
  ]);

  const handleQuantityChange = (pizzaId: number, pizzaTotalPrice: number) => {
    setPizzaItems(prevItems =>
        prevItems.map(pizza =>
            pizza.id === pizzaId ? { ...pizza, totalPrice: pizzaTotalPrice } : pizza
        )
    );
  };

  const totalOrder = useMemo(() => {
    return pizzaItems.reduce((acc, pizza) => acc + (pizza.totalPrice || 0), 0);
  }, [pizzaItems]);

  return (
    <>
    <h1 className="text-3xl font-bold font-mono text-center mt-5">Welcome to Crazy Pizza</h1>
      { pizzaItems.map(pizza => (
        <PizzaCard 
          key={pizza.id} 
          pizza={pizza}
          onQuantityChange={handleQuantityChange}
        />
      ))}
    <h2 className='text-3xl font-bold mt-8 text-center'>Total: {totalOrder.toFixed(2)}€</h2>
    <PaymentMethod />
    </>
  )
}