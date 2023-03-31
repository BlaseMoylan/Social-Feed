import React, { useState } from 'react';
import CreatePostForms from './Components/CreatePostForms/CreatePostForms';
import PostList from './Components/PostList/PostList';
import './App.css';
function App() {
  const [entries, setEntries] = useState([{name: 'Blase', post: 'This is just the beginning'},{name: 'Blase', post: 'This is just the beginning'}])
  
  function newPost(post){
    let tempPost = [...entries, post];
    setEntries(tempPost);
  }
  
  return (
    <div className='container-fluid layout'>
      <div className='border-box'>
        <CreatePostForms newPost={newPost}/>
      </div>
      <div className='border-box'>
        <PostList parentPost={entries}/>
      </div>
    </div>
  );
}

export default App;
