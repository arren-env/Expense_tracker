import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
