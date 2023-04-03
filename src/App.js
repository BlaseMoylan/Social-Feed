import React, { useState } from 'react';
import CreatePostForms from './Components/CreatePostForms/CreatePostForms';
import MapList from './Components/PostList/MapPost'
import './App.css';
function App() {
  const [entries, setEntries] = useState([])
  
  function newPost(post){
    let tempPost = [...entries,post];
    setEntries(tempPost);
  }
  
  return (
    <div className='container-fluid layout'>
      <div className='nav-row'>
        <p>Social<small >Feed</small></p>
      </div>
      <div className='border-box'>
        <CreatePostForms newPost={newPost}/>
      </div>
      <div className='border-box'>
        <MapList entries={entries}/>
      </div>
    </div>
  );
}

export default App;
