import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate, useParams} from "react-router-dom";
import './EditTodo.scss'
import {Button, Form, Input, Switch} from "antd";
import {useTranslation} from "react-i18next";
import {iTodoItem} from "../../components/TodoItem/types";
import {deleteTodo, editTodo, fetchTodoById} from "../../store/action-creators/todo";
import Loader from "../../components/Loader/Loader";
import {useDispatch} from "react-redux";

const EditTodo: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {t} = useTranslation();
    const {id} = useParams();
    const [todoIdem, setTodoItem] = React.useState<iTodoItem | any>(null)

    React.useEffect(() => {
        fetchTodoById(id).then(todo => setTodoItem(todo))
    }, [])

    const deleteTodoHander = () => {
        if(window.confirm(t('deleteTodo'))){
            dispatch(deleteTodo(id))
            navigate('/')
        }

    }
    const changeTitle = (title : string) => {
        setTodoItem({
             ...todoIdem, title: title,
        })
    }

    const changeCompleted = (completed : boolean) => {
        setTodoItem({
            ...todoIdem, completed: completed,
        })
    }

    const saveTodoHandler = () => {
        todoIdem.id = id
        dispatch(editTodo(todoIdem))
        navigate('/')
    }
    return (
        <div className="edit-todo">
            <div className="edit-todo__title">
                <Link to="/" className="edit-todo__title-link">
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </Link>
                <div>{t('editTodo')}</div>
            </div>
            {todoIdem ? <Form className="add-form" layout="vertical" >
                <Form.Item
                    name="title"
                    rules={[{ required: true }, { type: 'string', min: 1 }]}
                >
                    <Input placeholder={t('todoTitle')} defaultValue={todoIdem.title}  onChange={event => changeTitle(event.target.value)} type="text" />
                </Form.Item>
                <div className="edit-todo__switch">
                    <Switch defaultChecked={todoIdem?.completed} onChange={changeCompleted} ></Switch>
                    <div className="edit-todo__switch-title">{t('completedTodo')}</div>
                </div>

                <div>
                    <Button type="primary" htmlType="submit" onClick={saveTodoHandler}>
                        {t('SaveTodoBtn')}
                    </Button>
                    <Button type="primary" danger className="btn-delete" onClick={deleteTodoHander}>
                        {t('RemoveTodoBtn')}
                    </Button>
                </div>

            </Form> : <Loader/>}
        </div>
    );
};

export default EditTodo;