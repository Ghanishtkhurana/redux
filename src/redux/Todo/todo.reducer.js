import { Add_TODO, Delete_Todo, Update_Todo } from "./todo.type"

const initState = {
    todos : []
}

export const todoReducer = (state=initState,action)=>{
    switch(action.type){
        case Add_TODO : return {
            ...state,
            todos : [...state.todos,action.payload]
        }
        case Update_Todo : return {
            ...state,
            todos : action.payload
        }
        case Delete_Todo : return {
            ...state,
            todos : action.payload
        }
        default : return state
    }
}