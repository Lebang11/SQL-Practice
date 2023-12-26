import './App.css';
import { useEffect } from 'react';
import Books from './Books';
import NewBook from './New-Book';

function App() {

  return (
    <div className="App">
      <h1 className='display-5'>
        Welcome to Book shop
      </h1>
      <Books/>
      <NewBook/>
    </div>
  );
}

export default App;
