import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [];

const App = () => {
  // useState que possibilita a alteração do nosso array
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // função que adiciona uma nova expense ao array
  const addExpenseHandler = (expense) => {
    // função que soma a nova expense ao último estado do nosso array
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
};

export default App;
