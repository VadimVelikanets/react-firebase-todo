export interface TodoState {
    todos: any[];
    isLoading: boolean;
    errors: null | string
}

export enum todoActions {
    FETCH_TODOS ="FETCH_TODOS",
    FETCH_SUCCESS_TODOS="FETCH_SUCCESS_TODOS",
    FETCH_ERROR_TODOS = "FETCH_ERROR_TODOS",
    DELETE_TODO = "DELETE_TODO",
    COMPLETED_TODO = "COMPLETED_TODO",
    ADD_TODO = "ADD_TODO",
    EDIT_TODO = "EDIT_TODO",
}

export interface fetchTodosAction  {
    type: todoActions.FETCH_TODOS
}

export interface fetchTodosSuccessAction  {
    type: todoActions.FETCH_SUCCESS_TODOS,
    payload: any[]
}

export interface fetchTodosErrorAction  {
    type: todoActions.FETCH_ERROR_TODOS,
    payload: string
}

export interface deleteTodoAction  {
    type: todoActions.DELETE_TODO,
    payload: string | undefined
}

export interface completedTodoAction  {
    type: todoActions.COMPLETED_TODO,
    payload: completedData
}

export interface addTodoData {
    id: string,
    title: string
}
export interface addTodoAction {
    type: todoActions.ADD_TODO,
    payload: addTodoData
}

export interface editTodoData {
    id: string,
    completed: boolean,
    title: string
}

export interface editTodoAction {
    type: todoActions.EDIT_TODO,
    payload: editTodoData
}

export interface completedData {
    id: string,
    isCompleted: boolean
}

export interface iTodos {
    uid: string | undefined,
    title: string,
    completed: boolean,
    createdAt: any
}

export type TodoAction = fetchTodosAction | fetchTodosSuccessAction | fetchTodosErrorAction | deleteTodoAction | completedTodoAction | addTodoAction | editTodoAction