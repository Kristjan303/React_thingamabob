import './ExpenseDate.css';
const ExpenseItem = (props) => {

    const day = props.expenseDate.toLocaleString('en-US', {day: '2-digit'})
    const month = props.expenseDate.toLocaleString('en-US', {month: 'long'})
    const year = props.expenseDate.getFullYear()

    return (
        <div className='expense-date'>
            <div className='expense-date-month'>{month}</div>
            <div className='expense-date-year'>{year}</div>
            <div className='expense-date-day'>{day}</div>
        </div>
    );
}

export default ExpenseItem;