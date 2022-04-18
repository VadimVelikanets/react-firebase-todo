import React from 'react';
import './TodoItem.scss';
import {useDispatch} from "react-redux";
import {completedTodo, deleteTodo} from "../../store/action-creators/todo";

interface iTodoItem {
    item: any
}


const TodoItem : React.FC<iTodoItem> = ({item} ) => {
    const dispatch = useDispatch()
    const deleteTodoHander = () => {
        dispatch(deleteTodo(item.id))
    }

    const completedTodoHander = () => {
        const completedData = {
            id: item.id,
            isCompleted: item.completed
        }
        dispatch(completedTodo(completedData))
    }

    return (
        <div className="todo-item">
            <div className="todo-item__inner">
                <div>
                    <input checked={item.completed} id={item.id} type="checkbox" onChange={completedTodoHander}/>
                    <b className={item.completed && "todo-completed"}>{item.title}</b>
                </div>
                <button onClick={deleteTodoHander}>Remove</button>
            </div>
            <hr/>
        </div>
    );
};

export default TodoItem;