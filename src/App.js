import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // url=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

  const [coins, setCoins] = useState([]);

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

  return (
    <div className="App">
      <h1>HELLO YOUTUBE</h1>
    </div>
  );
}

export default App;
