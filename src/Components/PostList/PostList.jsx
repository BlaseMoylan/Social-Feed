import './PostList.css'
import { useState } from 'react';
import {FaHeartBroken} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
const Post = (props) => {
    
    const [likeClass,setLikeClass] = useState("inactive");
    const [dislikeClass,setDislikeClass] = useState("inactive");

    function handleLikeClick(){
        if(likeClass === "inactive"){
            setLikeClass("active")
        }
        if(dislikeClass === "active"){
            setDislikeClass("inactive")
        }
    }
    function handleDislikeClick(){
        if(dislikeClass === "inactive"){
            setDislikeClass("active")
        }
        if(likeClass === "active"){
            setLikeClass("inactive")
        }
    }
    
    return ( 

        <section key={props.key} className="inner-box">
            <div className='nameAndDate'>
                <p >
                    <h3><i>{props.entry.name}</i></h3>
                </p>
                <p1 >
                    {props.entry.date}
                </p1>
            </div>
            <div ><p className='text'>{props.entry.post}</p> </div>
            <div className='likeAndDislike'>
                <FaHeart type='button' className={likeClass} onClick={handleLikeClick} size={'30px'}/>
                <FaHeartBroken  type='button' className={dislikeClass} onClick={handleDislikeClick} size={'30px'}/>
            </div>
        </section>
        
     );
}
 
export default Post;