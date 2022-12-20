import axios from "axios"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLogin } from "../redux/auth/auth.action"
import { store } from "../redux/store"


function Login(){
    const {isAuth,token} = useSelector((store)=>store.auth)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
    
    console.log({"isAuth" : isAuth,"Token":token})


    const handleTheSubmit = ()=>{
        dispatch(getLogin({email,password}))
    }
    return (
        <div>
            <h3>Login</h3>
            <div>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter mail" />
                <br />
                <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
                <br />
                <button onClick={handleTheSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default Login 
