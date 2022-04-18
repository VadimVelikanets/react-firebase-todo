import {TodoAction, todoActions, TodoState} from "../../types/todo";

const initialState : TodoState = {
    todos: [],
    isLoading: false,
    errors: null
}

export const todoReducer = (state=initialState, action: TodoAction) : TodoState | undefined =>{
    switch (action.type) {
        case todoActions.FETCH_TODOS:
            return {isLoading: true, errors: null, todos: []}
        case todoActions.FETCH_SUCCESS_TODOS:
            return {isLoading: false, errors: null, todos: action.payload}
        case todoActions.FETCH_ERROR_TODOS:
            return {isLoading: true, errors: action.payload, todos: []}
        case todoActions.DELETE_TODO:
            return {...state, todos: state.todos.filter(item => item?.id !== action.payload)}
        case todoActions.COMPLETED_TODO:
            const newTodos = [...state.todos]
            newTodos.forEach(item => {
                if(item.id === action.payload.id){
                    item.completed = !item.completed
                }
            })
            return {...state, todos: newTodos}
        case todoActions.ADD_TODO:
            const newTodo = {id: state.todos.length+ 1, completed: false, title: action.payload, userId: 1}
            return {...state, todos: [...state.todos, newTodo]}
        default:
            return state
    }
}
