import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // url=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
    // fazendo a req para API
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
    // then para se tudo ocorrer bem
      .then(res => {
      // setCoins recebe o que veio da req
        setCoins(res.data);
        console.log(res.data);
      })
      // catch para se algo der errado
      .catch(error => console.log(error));
  }, []);

  // função para pegar o que o usuario escreve em search
  const handleChange = e => {
    setSearch(e.target.value);
  }

  return (
    <div className="app">
      <div className='app-search'>
        <h1 className='app-title'>Search a currency</h1>
        <form>
          <input
            className='app-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
    </div>
  );
}

export default App;
