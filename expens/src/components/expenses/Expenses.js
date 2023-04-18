import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import Filter from '../filter/Filter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return filteredYear === '' || expense.expenseDate.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className='expenses'>
            <Filter onFilter={filterChangeHandler} selectedYear={filteredYear} />
            {filteredExpenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.expenseTitle}
                        amount={expense.expenseAmount}
                        date={expense.expenseDate}
                    />
                ))
            )}
        </Card>
    );
};

export default Expenses;