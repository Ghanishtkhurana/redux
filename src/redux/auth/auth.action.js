import axios from "axios"
import { LOGIN, LOGOUT } from "./auth.type"

export const getLogin = ({email,password})=>async(dispatch)=>{
    const res = await axios.post("https://reqres.in/api/login",{email,password})
    return dispatch({type : LOGIN,payload : res.data.token})
}

export const getLogout =()=>async(dispatch)=>{
    return dispatch({type : LOGOUT})
}