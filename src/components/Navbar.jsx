import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getLogout } from "../redux/auth/auth.action";

function Navbar() {
    const {isAuth,token} = useSelector((store)=>store.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleTheLogin = ()=>{
        dispatch(getLogout())
    }
    useEffect(()=>{
        if(isAuth){
            navigate("/post")
        }
    },[isAuth])

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{
          display: "flex",
          gap: "30px",
          marginLeft: "20px",
          textDecoration: "none",
        }}
      >
        <Link to={"/"}>
          <h4>Home</h4>
        </Link>
        <Link to={"/post"}>
          <h4>Post</h4>
        </Link>
        <Link to={"/todo"}>
          <h4>Todo</h4>
        </Link>
        <Link to={"/login"}>
          <h4>Login</h4>
        </Link>
      </div>
      <div style={{ padding: "20px" }}>
        <button onClick={handleTheLogin} >{token? "LOGOUT" : "LOGIN"}</button>
      </div>
    </div>
  );
}

export default Navbar;
