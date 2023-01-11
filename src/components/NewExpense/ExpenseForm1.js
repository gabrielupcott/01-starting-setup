import React, { useState } from "react";
import "./ExpenseForm.css";

//THIS IS MY SOLUTION


const ExpenseForm1 = (props) => {
    
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //single state option
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //single state option
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });

    // setUserInput((prevState) => { //always on latest state snapshot
    //     return { ...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const [currentFormState, setFormState] = useState('closed');

  const formChangeHandler = (event) => {
    event.preventDefault();
    if (currentFormState === "closed") setFormState("opened");
    else setFormState("closed");
  }

  if (currentFormState === 'closed') {
    return (
        <form onSubmit={formChangeHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__actions">
            <button type="submit">Add New Expense</button>
          </div>
        </div>
      </form>
    );
  }
  else {
    return (
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-01-11"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={formChangeHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

};

export default ExpenseForm1;
