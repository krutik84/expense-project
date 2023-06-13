import react , { useState } from 'react';
import "./ExpenseItems.css";
import Card from "../UI/card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItems(props) {
  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItems;
