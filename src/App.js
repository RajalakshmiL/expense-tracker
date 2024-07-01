import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalContext';
import Countries from './components/Countries';


function App() {

  return (
    <GlobalProvider>
      <div className='flex justify-center'>
        <div className="m-14 w-[23%]">
            <Header />
            <Balance />
            <IncomeExpenses />
            <TransactionList />
            <AddTransaction />
            <Countries />
        </div>
      </div>  
    </GlobalProvider>
  );
}

export default App;
