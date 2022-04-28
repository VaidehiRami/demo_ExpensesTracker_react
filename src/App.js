import React from 'react';
import Hearder from './component/Hearder';
import Balance from './component/Balance';
import IncomeExpenses from './component/IncomeExpenses';
import TransactionList from './component/TransactionList';
import AddTransaction from './component/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';



function App() {
  return (
    <GlobalProvider>
      <Hearder />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
    
    
  );
}

export default App;
