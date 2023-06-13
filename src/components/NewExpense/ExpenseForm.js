import React , { useState} from 'react';
import './ExpenseForm.css';
function ExpenseForm(props){
    const [enteredtitle , setEnteredtitle] = useState('');
    const [enteredamount , setEnteredamount] = useState('');
    const [entereddate , setEntereddate] = useState('');
    const titlechangeHandler = (event) => {
        setEnteredtitle(event.target.value);
    };
    const amountchangeHandler = (event) => {
        setEnteredamount(event.target.value);
    };
    const datechangeHandler = (event) => {
        setEntereddate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const expensedata = {
            title:enteredtitle,
            amount:+enteredamount,
            date:new Date(entereddate)
          };
          props.onSaveExpense(expensedata);
          setEnteredamount('');
          setEnteredtitle('');
          setEntereddate('');
          
  };
 return(
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
        <label>Title:</label>
        <input type="text"  value={enteredtitle} onChange={titlechangeHandler}></input>
        </div>
        <div className="new-expense__control">
        <label>Amount:</label>
        <input type="number" value={enteredamount} onChange={amountchangeHandler}></input>
        </div>
        <div className="new-expense__control">
        <label>Date:</label>
        <input type="date" value={entereddate} onChange={datechangeHandler}></input>
        </div>
        </div>
        <div className="new-expense__actions">
        <button type="button" onClick={props.stopvisibility}>Cancel</button>
        <button type="submit">Add Expense</button>
        </div>
    </form>

    )
}

export default ExpenseForm;