import React,{ useState }from 'react';
import Card from "../UI/card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from './ExpensesList';
import Expensechart from "./Expensechart";
function Expenses(props){
  const [enteredyear,setEnteredyear] = useState('');
  
  const expensesyearHandler = (yeardata) => {
    setEnteredyear(yeardata);
    console.log(yeardata);
  }
  const filexpense = props.item.filter( expense => {return expense.date.getFullYear().toString() === enteredyear;});
    return(  
      <li>
        <Card className="expenses">
        <ExpensesFilter selected ={enteredyear} onexpensesyearhandler={expensesyearHandler}/>
        <Expensechart expenses={filexpense}/>
        <ExpensesList item={filexpense}></ExpensesList>
        </Card>
      </li>
    )
}
export default Expenses;