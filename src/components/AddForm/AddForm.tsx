import React from 'react';
import './AddForm.scss'
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/action-creators/todo";
import {firestore} from "../../config/firebaseSetup";
import {useAppSelector} from "../../hooks";
import firebase from "firebase/compat/app";
import {iTodos} from "../../types/todo";

const AddForm = () => {
    const dispatch = useDispatch();
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
        <div className="add-form">
            <input value={title} onChange={event => setTitle(event.target.value)} type="text"/>
            <button onClick={addTodoHandler}>Add</button>
        </div>
    );
};

export default AddForm;