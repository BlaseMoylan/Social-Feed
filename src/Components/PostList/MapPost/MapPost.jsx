
import Post from "../PostList";

const MapList=({entries}) =>{
    return (
        <div>
            {entries.map((entry, index) => <Post entry={entry} key= {index}/>).reverse()}
        </div>
    )
}
export default MapList;