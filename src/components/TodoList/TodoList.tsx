import React from 'react';
import { useDispatch } from 'react-redux'
import { useAppSelector} from "../../hooks";
import {fetchTodo} from "../../store/action-creators/todo";
import TodoItem from "../TodoItem/TodoItem";
import Loader from "../Loader/Loader";
import { Card, Col, Row } from 'antd';

const TodoList : React.FC = () => {
    const dispatch = useDispatch()
    const todo = useAppSelector((state) => state.todo)
    const user = useAppSelector((state) => state.user)
    React.useEffect(()=> {
        dispatch(fetchTodo(user?.user?.uid))
    },[])

    if(todo?.isLoading)  return (<Loader/>)

    return (
        <>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {todo?.todos?.length ? todo.todos.map((item,index) => <TodoItem key={index} item={item}/>) :
                        (<h3>No todo</h3>)
                    }
                </Row>
            </div>
        </>

    );
};

export default TodoList;