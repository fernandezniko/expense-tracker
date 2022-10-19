import React, { useState } from "react";
import Card from "../Card/Card";
import './Expenses.css';
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

const Expenses = ({ expenses }) => {

    const [selectedYear, setSelectedYear] = useState('2019');

    const filterYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onYearChange={filterYearHandler} selectedYear={selectedYear} />
                <ExpensesList expenses={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;