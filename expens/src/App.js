import './App.css';
import Expenses from './components/expenses/Expenses';
import './components/expenses/ExpenseItem.css';

const App = () => {
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
        <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;
