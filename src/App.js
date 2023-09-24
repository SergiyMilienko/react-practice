import logo from './logo.svg';
import './App.css';
import {react, useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/classCounter';

function App() {
  const [value, setValue] = useState('Text')

  return (
    <div className="App">
      <ClassCounter/>
    </div>
  );
}

export default App;
