import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, setShowForm }) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseDate = {
            title: title,
            amount: amount,
            date: new Date(date)
        }
        setTitle('');
        setAmount('');
        setDate('');
        onSaveExpenseData(expenseDate);
    }

    const cancelFormHandler = () => {
        setShowForm(false);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={amount} min="0.01" step="0.01" onChange={amountHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={date} min="2019-01-01" max="2022-12-31" onChange={dateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={cancelFormHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;