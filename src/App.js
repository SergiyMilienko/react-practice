import logo from './logo.svg';
import {react, useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/classCounter';
import './styles/App.css';
import Postitem from './components/Postitem';

function App() {

  return (
    <div className="App">
      <Postitem post={{id: 1, title: 'Javascript', body: 'Decription'}}/>
      <Postitem post={{id: 2, title: 'HTML', body: 'Decription'}}/>
      <Postitem post={{id: 3, title: 'CSS', body: 'Decription'}}/>
      <Postitem post={{id: 4, title: 'Python', body: 'Decription'}}/>
      <Postitem post={{id: 5, title: 'React', body: 'Decription'}}/>
    
    </div>
  );
}

export default App;
