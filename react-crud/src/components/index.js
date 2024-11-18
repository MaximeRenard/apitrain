import { useState, useCallback, useMemo } from "react";
import Todos from "./Callback";
import { withRouter } from '../common/with-router';

import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["old"]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </>
  );
};
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 100000; i++) {
    num += 1;
  }
  return num;
};

export default withRouter(App);
