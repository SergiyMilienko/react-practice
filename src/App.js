import logo from './logo.svg';
import {react, useState} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/classCounter';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

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
      <form>
        <input type="text" placeholder='Name of the post'></input>
        <input type='text' placeholder='Description of post'></input>
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title="List of Posts"/>
    </div>
  );
}

export default App;
