import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    //on[event] naming convention for event handling
    
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };  

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {
                !isEditing && <button onClick={startEditingHandler}>Add New Expense</button> //js trick, basically if first condition, evaluate second
            }
            {
                isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopEditingHandler} />
            }
        </div>
    );
};

export default NewExpense;