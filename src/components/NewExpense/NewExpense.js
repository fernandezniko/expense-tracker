import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const NewExpense = ({ onAddExpense }) => {

    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(true);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            {
                showForm ?
                    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setShowForm={setShowForm}/>
                    :
                    <button onClick={showFormHandler}>Add New Expense</button>
            }
        </div>
    )

}

export default NewExpense;