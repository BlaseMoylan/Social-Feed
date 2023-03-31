import './PostList.css'
const PostList = (props) => {
    return ( 
        <div className="list">
            {props.parentPost.map((entry,index)=> {
                return(
                    <section key={index} className="inner-box">
                        <div ><p className='text'><h3>{entry.name}</h3></p> </div>
                        <div ><p className='text'>{entry.post}</p> </div>
                    </section>
                );
            })}
        </div>
     );
}
 
export default PostList;