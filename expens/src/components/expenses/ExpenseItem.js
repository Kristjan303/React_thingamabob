import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

  return (
    <div className='expense-item'>
        <ExpenseDate expenseDate={props.expenseData.expenseDate}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.expenseData.expenseTitle}</h2>
        <div className='expense-item__price'>{props.expenseData.expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;