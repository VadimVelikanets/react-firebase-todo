import React, {useTransition} from 'react';
import './AddForm.scss'
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/action-creators/todo";
import {firestore} from "../../config/firebaseSetup";
import {useAppSelector} from "../../hooks";
import firebase from "firebase/compat/app";
import {iTodos} from "../../store/types/todo";
import {Form, Input, Button} from "antd";
import {useTranslation} from "react-i18next";

const AddForm = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation()
    const user = useAppSelector(state => state.user);
    const [title, setTitle] = React.useState<string>('');
    const addTodoHandler =  () => {

        if(title != '') {
            const newTodo: iTodos = {
                uid: user?.user?.uid,
                title: title,
                completed: false,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            }
            firestore.collection('todos').add(newTodo)
            dispatch(addTodo(title))
            setTitle('')
        }
    }

    return (
        <>
            <Form className="add-form" layout="vertical" onFinish={addTodoHandler}>
                <Form.Item
                    name="title"
                    rules={[{ required: true }, { type: 'string', min: 1 }]}
                >
                    <Input placeholder={t('todoTitle')} value={title} onChange={event => setTitle(event.target.value)} type="text" />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    {t('AddTodoBtn')}
                </Button>
            </Form>
        </>

    );
};

export default AddForm;