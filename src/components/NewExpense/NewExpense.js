import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Button from "../UI/Button";

import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  };

  const showExpenseForm = () => {
    setShowForm(true);
  };

  const hideExpenseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideExpenseForm}/>}
      {!showForm && <Button name="Add New Expense" onClick={showExpenseForm}/>}
    </div>
  );
};

export default NewExpense;