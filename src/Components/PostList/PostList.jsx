import './PostList.css'
import { useState } from 'react';
const PostList = (props) => {
    // is there a way of doing this with just one useState variable
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
        // <div className="list">
        //     {props.(entry,key).map((entry,index)=> {
        //         return(
        //             <section key={index} className="inner-box">
        //                 <div ><p className='text'><h3>{entry.name}</h3></p> </div>
        //                 <div ><p className='text'>{entry.post}</p> </div>
        //                 <div className='likeAndDislike'>
        //                     <button  className={likeClass} onClick={handleLikeClick}>Like</button>
        //                     <button  className={dislikeClass} onClick={handleDislikeClick} >Dislike</button>
        //                 </div>
        //             </section>
        //         );
        //     })}
        // </div>
        <div className="list">
            <section key={props.key} className="inner-box">
                <div ><p className='text'><h3>{props.entry.name}</h3></p> </div>
                <div ><p className='text'>{props.entry.post}</p> </div>
                <div className='likeAndDislike'>
                    <button  className={likeClass} onClick={handleLikeClick}>Like</button>
                    <button  className={dislikeClass} onClick={handleDislikeClick} >Dislike</button>
                </div>
            </section>
        </div>
     );
}
 
export default PostList;