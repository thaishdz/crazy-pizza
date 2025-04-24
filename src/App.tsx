import PizzaList from "./components/PizzaList";

function App() {
  const pizzas = [
    { id: 1, name: "Pepperoni", description: "Delicious pizza with pepperoni and cheese", price: 10 },
    { id: 2, name: "Margherita", description: "Classic pizza with tomato sauce and mozzarella cheese", price: 8 },
    { id: 3, name: "Hawaiian", description: "Classic pizza with ham, pineapple, and mozzarella cheese", price: 12 }
  ];
  return (
    <>
      <h1 className="text-3xl font-bold font-mono text-center mt-5">Welcome to Crazy Pizza</h1>
      { pizzas.map(pizza => {
        return <PizzaList key={pizza.id} pizza={pizza} />
      })}
    </>
  )
}

export default App
