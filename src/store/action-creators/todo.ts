import { todoActions} from "../../types/todo";
import {Dispatch} from "redux";
import {TodoAction} from "../../types/todo"
import {firestore} from "../../config/firebaseSetup";
import {completedData} from "../../types/todo";

export const fetchTodo = (uid: string | undefined) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: todoActions.FETCH_TODOS})
            const response=firestore.collection('todos').where("uid", "==", uid);
            const data=await response.get();
            const todos: any[] = []
            data.docs.forEach(item=>{
                todos.push({...item.data(), id: item.id})
            })
             dispatch(({type: todoActions.FETCH_SUCCESS_TODOS, payload: todos}))
        }
        catch (e){
            dispatch({type: todoActions.FETCH_ERROR_TODOS, payload : "Todos doesn't load"})
        }
    }
}

export const deleteTodo =  (id : string | undefined) => {

    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const response =  firestore.collection('todos').doc(id);
            await  response.delete()
            dispatch(({type: todoActions.DELETE_TODO, payload: id}))
        }
        catch (e){
            dispatch({type: todoActions.FETCH_ERROR_TODOS, payload : "Todos doesn't load"})
        }
    }
}

export const completedTodo = (data : completedData) => {

    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const response =  firestore.collection('todos').doc(data?.id);
            await  response.update({completed: !data.isCompleted})
            dispatch(({type: todoActions.COMPLETED_TODO, payload: data}))
        }
        catch (e){
            dispatch({type: todoActions.FETCH_ERROR_TODOS, payload : "Todos doesn't load"})
        }
    }
}

export const addTodo = (title: string) => {
    return {
        type: todoActions.ADD_TODO,
        payload: title
    }
}