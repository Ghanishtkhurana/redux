import { Add_TODO, Delete_Todo, Update_Todo } from "./todo.type"

export const addTodo=(creed)=>async(dispatch)=>{
    return dispatch({type : Add_TODO ,payload : creed})
}

export const updateTodo = (creed)=>async(dispatch)=>{
    return dispatch({type : Update_Todo,payload:creed})
}

export const deleteTodo = (creed)=>async(dispatch)=>{
    return dispatch({type : Delete_Todo,payload : creed})
}