import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
import './components/ExpenseItem.css';
function App() {

    const expenses = [
        {
            expenseDate: new Date(2023, 4, 1),
            expenseTitle: 'Car Insurance',
            expenseAmount: 294.67
        },
        {
            expenseDate: new Date(2023, 3, 1),
            expenseTitle: 'Car Insurance',
            expenseAmount: 560.12
        }]
  return (
    <div className="App">
        <ExpenseItem expenseData={expenses[0]}></ExpenseItem>
        <ExpenseItem expenseData={expenses[1]}></ExpenseItem>

    </div>
  );
}

export default App;
