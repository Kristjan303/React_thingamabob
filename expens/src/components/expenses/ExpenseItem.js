import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('Clicked')
    }

  return (
    <Card className='expense-item'>
        <ExpenseDate expenseDate={props.expenseData.expenseDate}></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.expenseData.expenseTitle}</h2>
        <div className='expense-item__price'>{props.expenseData.expenseAmount}</div>
      </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem;