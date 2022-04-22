import React from 'react';
import './TodoItem.scss';
import {useDispatch} from "react-redux";
import {completedTodo, deleteTodo} from "../../store/action-creators/todo";
import {Card, Col, Switch, Button} from "antd";

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
        <>
            <Col span={8} className="todo-item">
                <Card className={item.completed && "todo-completed"} title={item.title} bordered={false}>
                    <div className="todo-item__inner">
                        <div>
                            <Switch defaultChecked={item.completed} id={item.id}  onChange={completedTodoHander}></Switch>
                            <b  className="completed-text">completed</b>
                        </div>
                        <Button onClick={deleteTodoHander} type="primary" danger>
                            Remove
                        </Button>
                    </div>
                </Card>
            </Col>
        </>

    );
};

export default TodoItem;