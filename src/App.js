import logo from './logo.svg';
import {react, useState, useRef} from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/classCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Decription'},
    {id: 2, title: 'HTML', body: 'Decription'},
    {id: 3, title: 'CSS', body: 'Decription'},
    {id: 4, title: 'Python', body: 'Decription'},
    {id: 5, title: 'React', body: 'Decription'}
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0px'}}/>
      <div>
        <MySelect defaultValue="Sort" 
        value={selectedSort}
        onChange={sortPosts}
        options={[
          {value: 'title', name: 'By Name'},
          {value: 'body', name: 'By Description'}
          ]}/>
      </div>
      {posts.length !== 0
        ? <PostList  remove={removePost} posts={posts} title="List of Posts"/>
        : <h1 style={{textAlign: 'center'}}>Posts were not found</h1>
      }
      
    </div>
  );
}

export default App;
