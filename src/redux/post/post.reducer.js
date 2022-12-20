import { GET_POST } from "./post.type"

const initState = {
    posts : []
}

export const postReducer = (state=initState,action)=>{
    switch(action.type){
        case GET_POST : return {
            ...state,
            posts : action.payload
        }
        default : return state
    }
}