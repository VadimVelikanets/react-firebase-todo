import React from 'react';
import { useDispatch } from 'react-redux'
import { useAppSelector} from "../../hooks";
import {fetchTodo} from "../../store/action-creators/todo";
import TodoItem from "../TodoItem/TodoItem";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {firestore} from "../../config/firebaseSetup";
import firebase from "firebase/compat/app";
const TodoList : React.FC = () => {
    const dispatch = useDispatch()
    const todo = useAppSelector((state) => state.todo)
    const user = useAppSelector((state) => state.user)
    React.useEffect(()=> {
        dispatch(fetchTodo(user?.user?.uid))
    },[])

    return (
        <div>
            <div>
                {todo?.isLoading && (
                    <div>Loading...</div>
                )}
            </div>

            {todo?.todos?.length ? todo.todos.map((item,index) => <TodoItem key={index} item={item}/>) :
                (<h3>No todo</h3>)
            }
        </div>
    );
};

export default TodoList;