import './PostList.css'
import { useState } from 'react';
import {FaHeartBroken} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
// import React, {Component} from 'react';
const Post = (props) => {
    // is there a way of doing this with just one useState variable
    const [likeClass,setLikeClass] = useState("inactive");
    const [dislikeClass,setDislikeClass] = useState("inactive");

    let today=new Date();
    // +" "+"at"+" "+today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let time= today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    
    const [date,setCurrentDate] = useState(time);

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
    function dateAndTime(){
        // setCurrentDate(time)
        return date
    }
    return ( 
        // <div className="list">
            <section key={props.key} className="inner-box">
                <div className='nameAndDate'>
                    <p >
                        <h3><i>{props.entry.name}</i></h3>
                    </p>
                    <p1 >
                        {dateAndTime()}
                    </p1>
                </div>
                <div ><p className='text'>{props.entry.post}</p> </div>
                <div className='likeAndDislike'>
                    {/* <button  className={likeClass} onClick={handleLikeClick}><AiOutlineHeart/></button> */}
                    <FaHeart type='button' className={likeClass} onClick={handleLikeClick} size={'30px'}/>
                    <FaHeartBroken  type='button' className={dislikeClass} onClick={handleDislikeClick} size={'30px'}/>
                </div>
            </section>
        // </div>
     );
}
 
export default Post;