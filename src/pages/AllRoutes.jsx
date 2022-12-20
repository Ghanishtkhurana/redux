import { Route, Routes } from "react-router-dom"
import PrivateRoute from "../Private/PrivateRoute"
import Home from "./Home"
import Login from "./Login"
import Post from "./Post"
import Todo from "./Todo"

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={
            <PrivateRoute>
            <Post />
            </PrivateRoute>
            } />
            <Route path="/todo" element={
            <PrivateRoute>
            <Todo />
            </PrivateRoute>
            } />
            <Route path="/login" element={
            <Login />
            } />
        </Routes>
    )
}

export default AllRoutes