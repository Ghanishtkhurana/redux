import { LOGIN, LOGOUT } from "./auth.type";

let token = localStorage.getItem("token")
console.log("token=>",token)
const initState = {
  isAuth: false,
  token: !!token,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        isAuth: true,
        token: action.payload,
      };
    case LOGOUT : 
    localStorage.removeItem("token") 
    return{
        ...state,
        isAuth : false ,
        token : ""
    }
    default:
      return state;
  }
};
