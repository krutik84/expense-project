import "./ExpensesList.css";
import ExpenseItems from "./ExpenseItems";
const ExpensesList = props => {
  if (props.item.length === 0){
    return (<p className="expenses-list__fallback">no expense found</p>);

  }
  return(
    <ul className="expenses-list">
      {props.item.map(expense => <ExpenseItems 
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>)}
    </ul>
  )

}
export default ExpensesList;