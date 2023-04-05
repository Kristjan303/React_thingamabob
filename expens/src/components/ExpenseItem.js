function ExpenseItem(props) {
    console.log(props)

  return (
    <div className='expense-item'>
      <div>{props.expenseData.expenseDate.toString()}</div>
      <div className='expense-item__description'>
        <h2>{props.expenseData.expenseTitle}</h2>
        <div className='expense-item__price'>{props.expenseData.expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;