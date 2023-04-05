function ExpenseItem(props) {

    const day = props.expenseDate.toLocaleString('en-US', {day: '2-digit'})
    const month = props.expenseDate.toLocaleString('en-US', {month: 'long'})
    const year = props.expenseDate.getFullYear()

    return (
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
    );
}

export default ExpenseItem;