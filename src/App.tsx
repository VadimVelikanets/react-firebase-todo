import React, {useEffect} from 'react';
import './App.scss';
import TodoList from "./components/TodoList/TodoList";
import AddForm from "./components/AddForm/AddForm";
import {useAppSelector} from "./hooks";
import AuthForm from "./components/AuthForm/AuthForm";
import ProfileBar from "./components/ProfileBar/ProfileBar";
import {useDispatch} from "react-redux";
import {getUser} from "./store/action-creators/user";

const App = () => {
    const dispatch = useDispatch()
    const user = useAppSelector(state => state.user?.user)
    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem('userData') || '{}')
        if(data && Object.keys(data).length !== 0) {
            dispatch(getUser(data))
        }
    },[])

    return (
        <div className="container">
            {user  ? <>
                    <ProfileBar/>
                    <AddForm/>
                    <TodoList/>
                </>
                : (
                <>
                    <AuthForm/>
                </>)
            }
        </div>
    );
};

export default App;