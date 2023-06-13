import React,{ useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
function NewExpense(props){
    const saveexpenseHandler = (savedata) => {
        const expenseData = {
            ...savedata,
            id:Math.random().toString()
        };
        props.onsaveexpenseapp(expenseData);
        props.setIsediting(false);
    }
    const [Isediting, setIsediting] = useState(false);
    const visibleHandler = () => {
        setIsediting(true);
    }
    const setvisibleHandler = () => {
        setIsediting(false);
    }
    return(
        <div className="new-expense">
            {!Isediting && <button onClick={visibleHandler}>Add new Expense</button>}
            {Isediting && <ExpenseForm  stopvisibility={setvisibleHandler} onSaveExpense={saveexpenseHandler}></ExpenseForm>}
           </div>
    )
}
export default NewExpense;