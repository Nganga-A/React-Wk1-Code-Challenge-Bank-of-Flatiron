import React, { useEffect, useState } from 'react';
import TransactionTable from './TransactionTable';
import AddTransactionForm from './AddTransactionForm';
import SearchBar from './SearchBar';
import SortButton from './SortButton';


function App() {
  
  const [transactions, setTransactions] = useState([]); //holds current transactions in table and updates when filtered..initially data fetched
  const [originalTransactions, setOriginalTransactions] =useState([]); //original list of transactions fetched and remains the same


  //fetch data
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setOriginalTransactions(data);
      });
  }, []);
 
  //Add a new transaction to the state using form
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions,newTransaction])
  };


  //Filter based on search term
  const handleSearch = (searchTerm) => {
    
    if (searchTerm === '') {
      //if searchbar is empty display original lists of transactions
      setTransactions(originalTransactions)

    } else {
      
      const filteredTransactions = originalTransactions.filter((transaction) => 
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setTransactions([...filteredTransactions]); //Make a new array of filtered Transactions (don't directly modify the state array)
    }
  };


  //Filter Transactions alphabetically by category
  const handleSort = () => {
    const sortedTransactions = [...transactions].sort((a, b) =>
    a.category.localeCompare(b.category)
    );
    setTransactions(sortedTransactions);
  }

  return (
    <div>
      <h1>Bank Transactions App</h1>
      <div className='inline-components'> 
         <SearchBar onSearch={handleSearch}/> 
         <SortButton onSort={handleSort} /> 
      </div>
      <TransactionTable transactions={transactions} />
      <AddTransactionForm addTransaction={addTransaction} />
    
    </div>
  );
}

export default App;
