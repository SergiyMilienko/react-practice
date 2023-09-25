import logo from './logo.svg';
import {react, useState, useRef} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/classCounter';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Decription'},
    {id: 2, title: 'HTML', body: 'Decription'},
    {id: 3, title: 'CSS', body: 'Decription'},
    {id: 4, title: 'Python', body: 'Decription'},
    {id: 5, title: 'React', body: 'Decription'}
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
  }

  return (
    <div className="App">
      <form>
        <MyInput type="text" 
          placeholder='Name of the post'
          value={title}
          onChange={e => setTitle(e.target.value)}
          />
        <MyInput type='text' 
        placeholder='Description of post'
        value={body}
        onChange={e => setBody(e.target.value)}/>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="List of Posts"/>
    </div>
  );
}

export default App;
