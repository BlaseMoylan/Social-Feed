
import PostList from "./PostList";

const MapList=(props) =>{
    return (
        <div>
            {props.parentPost.map(entry => <PostList entry={entry} key= {entry.id}/>)}
        </div>
    )
}
export default MapList;