import React, { useEffect, useState } from "react";
import { counterStore } from "./utils/counterStore";

const App: React.FC = () => {
  const [state, setState] = useState(counterStore.getState());

  const increment = () =>
    counterStore.dispatch({ type: "counter/incremented" });
  const decrement = () =>
    counterStore.dispatch({ type: "counter/decremented" });

  useEffect(() => {
    const unsubscribe = counterStore.subscribe(() => {
      setState(counterStore.getState());
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <span>{state.value}</span>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default App;
