import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  //let expensesContent = <p>No expenses found.</p>;
  //filteredExpenses.length === 0 && <p>No expenses found.</p> //js trick: if the first operator in an && operation is true, the second one will be evaluated or in this case returned

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      }
    </ul>
  );
};

export default ExpensesList;