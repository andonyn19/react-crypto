import { useEffect, useState } from 'react';
import './App.css';
import TableCoins from './components/TableCoins';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1';

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setCoins(data))
  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <input 
          type='text' 
          placeholder='Search a coin...' 
          className='form-control bg-dark text-light border-0 mt-4 text-center'
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoins
          coins={coins}
          search={search}
        />
      </div>
    </div>
  );
}

export default App;
