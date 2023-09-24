import logo from './logo.svg';
import {react, useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/classCounter';
import './styles/App.css';
import Postitem from './components/Postitem';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Decription'},
    {id: 2, title: 'HTML', body: 'Decription'},
    {id: 3, title: 'CSS', body: 'Decription'},
    {id: 4, title: 'Python', body: 'Decription'},
    {id: 5, title: 'React', body: 'Decription'}
  ])
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>List of posts</h1>
      {posts.map(post => 
        <Postitem post={post} key={post.id}/>
      )}
    </div>
  );
}

export default App;
