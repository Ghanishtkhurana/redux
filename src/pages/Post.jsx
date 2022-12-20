import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPost } from "../redux/post/psot.action"
import { store } from "../redux/store"

function Post(){
    const posts = useSelector((store)=>store.post.posts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPost())
    },[])
    
    console.log("posts",posts)
    return (
        <div>
            <h3>Post</h3>
            {
                posts.data?.map((user)=><div>
                    <img src={user.avatar} alt="" />
                    <h4>{user.first_name}{" "}{user.last_name}</h4>
                </div>)
            }
        </div>
    )
}

export default Post 
