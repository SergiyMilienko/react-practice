import logo from './logo.svg';
import './App.css';
import {react, useState} from 'react';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('Text')

  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
