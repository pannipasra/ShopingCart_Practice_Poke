import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';

import { useState } from 'react'

function App() {
  const {pokeData} = data;
  const [cartItem, setCartItem] = useState([])

  const onAdd = (product) => {
    const exist = cartItem.find(x => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) => 
        x.id === product.id ? { ...exist, qty: exist.qty + 1} : x
        )
      );
    } else {
      setCartItem([...cartItem, {...product, qty: 1}])
    }
  }

  return (
    <div className="App">
        <Header/>
        <div className='row'>
            <Main poke_data={pokeData}/>
            <Basket onAdd={onAdd} cartItem={cartItem} />
        </div>
    </div>
  );
}

export default App;
