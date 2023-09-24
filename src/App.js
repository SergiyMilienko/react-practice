import logo from './logo.svg';
import {react, useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/classCounter';
import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Decription'},
    {id: 2, title: 'HTML', body: 'Decription'},
    {id: 3, title: 'CSS', body: 'Decription'},
    {id: 4, title: 'Python', body: 'Decription'},
    {id: 5, title: 'React', body: 'Decription'}
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Javascript2', body: 'Decription'},
    {id: 2, title: 'HTML2', body: 'Decription'},
    {id: 3, title: 'CSS2', body: 'Decription'},
    {id: 4, title: 'Python2', body: 'Decription'},
    {id: 5, title: 'React2', body: 'Decription'}
  ])
  return (
    <div className="App">
      <PostList posts={posts} title="List of Posts"/>
      <PostList posts={posts2} title="List of Posts2"/>
    </div>
  );
}

export default App;
