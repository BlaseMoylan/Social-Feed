import { useState } from "react";


import './CreatePostForms.css'
const CreatePostForms = (props) => {
    const [name, setName] = useState("");
    const [post, setPost] = useState("");
    let today=new Date();
    let time=today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    const [date,setCurrentDate] = useState(time);
    function handleSubmit(event){
        event.preventDefault();
        setCurrentDate(time)
        let newPost={
            name:name,
            post:post,
            date:date
        };
        props.newPost(newPost)
    }

    return ( 
        <form onSubmit={handleSubmit} className="inner-box">
            <div><h1 className="question">What's On Your Mind?</h1></div>
            <div className="form">
                <label style={{display:'inline-block'}}>Name</label>
                <input type='string' className="form-control input-box" value={name} onChange={(event) => setName(event.target.value)} style={{height:'20px'}} />
            </div>
            <div className="form">
                <label style={{display:'inline-block'}}>Post</label>
                <input type='string' className="form-control input-box" value={post} onChange={(event) => setPost(event.target.value)} style={{height: '40px'}}/>
            </div>
            <div className="create-button">
                <button type='submit' className="btn btn-primary create" ><i>Add Post</i></button>
            </div>
        </form>
    );
}
 
export default CreatePostForms;