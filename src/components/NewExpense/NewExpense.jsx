import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEEditing] = useState(false);

  const saveExpenseDataHandler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEEditing(false);
  };

  const startEditingHandler = () => {
    setIsEEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
