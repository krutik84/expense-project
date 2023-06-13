import "./App.css";
import React,{ useState }from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: "New Desk (Wooden)",
    amount: 450, 
    date: new Date(2021, 5, 12),
  }
];
function App() {
  const [expenses,setExpenses]= useState(DUMMY_EXPENSES);
  const saveexpenseHandler = (expense) => {
        setExpenses([expense,...expenses]);     
  }
  return (
    <div className="App">
      <header className="App-header">
        <NewExpense onsaveexpenseapp={saveexpenseHandler}></NewExpense>
        <Expenses item={expenses}></Expenses>
        
      </header>
    </div>
  );
}

export default App;
