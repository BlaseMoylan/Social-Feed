import { useState } from "react";


import './CreatePostForms.css'
const CreatePostForms = (props) => {

    const [name, setName] = useState("");
    const [post, setPost] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        let newPost={
            name:name,
            post:post
        };
        props.newPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit} className="inner-box">
            <div className="form">
                <label style={{display:'inline-block'}}>Name</label>
                <input type='string' className="form-control input-box" value={name} onChange={(event) => setName(event.target.value)} style={{height:'20px'}} />
            </div>
            <div className="form">
                <label style={{display:'inline-block'}}>Post</label>
                <input type='string' className="form-control input-box" value={post} onChange={(event) => setPost(event.target.value)} style={{height: '40px'}}/>
            </div>
            <button type='submit' className="btn btn-primary" >Submit</button>
        </form>
    );
}
 
export default CreatePostForms;