import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpense from "./components/newExpense/NewExpense";



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

    const addExpenseHandler = (expense) => {
        console.log(expense);
        console.log('App.js');
    }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;
