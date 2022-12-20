import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

function PrivateRoute({children}){
    const token = useSelector((store)=>store.auth.token)
    console.log("ISAUTH",token)
    const navigate = useNavigate()

    if(!token){
       return <Navigate to="/login" />
    }

    return children
}

export default PrivateRoute