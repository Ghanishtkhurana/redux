import { GET_POST } from "./post.type"

export const getPost = ()=>async(dispatch)=>{
    const res = await fetch("https://reqres.in/api/users")
    const data = await res.json()
    return dispatch({type : GET_POST ,payload : data})
}