import React, {useTransition} from 'react';
import './TodoItem.scss';
import {iTodoItem} from "./types";
import {useDispatch} from "react-redux";
import {completedTodo, deleteTodo} from "../../store/action-creators/todo";
import {Card, Col, Switch, Button} from "antd";
import {useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


const TodoItem : React.FC<iTodoItem> = ({item} ) => {
    const dispatch = useDispatch();
    const {t} = useTranslation()
    const deleteTodoHander = () => {
        if(window.confirm(t('deleteTodo'))){
            dispatch(deleteTodo(item.id))
        }
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
            <Col lg={{span: 8}} md={{span: 24}}  sm={{span: 24}}  className="todo-item">
                <Link to={`/edit/${item.id}`} className="todo-item__edit">
                    <FontAwesomeIcon icon={faPenToSquare}/>
                </Link>

                <Card className={item.completed && "todo-completed"} title={item.title} bordered={false}>
                    <div className="todo-item__inner">
                        <div>
                            <Switch defaultChecked={item.completed} id={item.id}  onChange={completedTodoHander}></Switch>
                            <b  className="completed-text"> {t('completedTodo')}</b>
                        </div>
                        <Button onClick={deleteTodoHander} type="primary" danger>
                            {t('RemoveTodoBtn')}
                        </Button>
                    </div>
                </Card>
            </Col>
        </>

    );
};

export default TodoItem;