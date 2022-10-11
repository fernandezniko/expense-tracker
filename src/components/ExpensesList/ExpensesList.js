import React, {useState} from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

import './ExpensesList.css';
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";

function ExpensesList({ expenses }) {

    const [selectedYear, setSelectedYear] = useState('2019');

    const filterYearHandler = (selectedYear) => {
        console.log(selectedYear);
        setSelectedYear(selectedYear);
    }

    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter onYearChange={filterYearHandler} selectedYear={selectedYear}/>
                {
                    expenses.map((expense) => {
                        return (
                            <ExpenseItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        )
                    })
                }
            </Card>
        </div>
    )
}

export default ExpensesList;