import React, { useEffect, useState } from 'react';
import { SearchAppBar } from './components/AppBar';
import { TransactionsTable } from './components/TransactionsTable';
import { SearchInput } from './components/SearchBar';
import './App.css';
import { getInfo } from './api';
// https://github.com/solana-labs/solana/blob/master/web3.js/examples/get_account_info.js

function App() {
  const [searchQuery, setSearchQuery] = React.useState(
    '8YmMhex5Vd5JPsyNhCwFPDx5vqeedpCuyFE2W7VtRXQT'
  );
  const [transactions, setTransactions] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(async () => {
    const data = await getInfo(searchQuery);

    const timer = setTimeout(() => {
      setTransactions(data);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  useEffect(() => {
    console.log(searchQuery);
  });
  return (
    <div className="App">
      <SearchInput handleSearch={handleSearch} searchQuery={searchQuery} />
      <TransactionsTable transactions={transactions} />
    </div>
  );
}

export default App;
