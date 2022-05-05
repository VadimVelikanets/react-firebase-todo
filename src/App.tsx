import React, {useEffect} from 'react';
import TodoList from "./components/TodoList/TodoList";
import AddForm from "./components/AddForm/AddForm";
import {useAppSelector} from "./hooks";
import AuthForm from "./components/AuthForm/AuthForm";
import {useDispatch} from "react-redux";
import {getUser} from "./store/action-creators/user";
import Header from "./components/Header/Header";
import {Layout} from "antd";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './config/i18n';
import {useTranslation} from "react-i18next";

library.add(faGoogle )


const App = () => {
    const dispatch = useDispatch()
    const {t, i18n} = useTranslation()

    const user = useAppSelector(state => state.user?.user)
    useEffect(() =>{
        let data = JSON.parse(localStorage.getItem('userData') || '{}')
        if(data && Object.keys(data).length !== 0) {
            dispatch(getUser(data))
        }
    },[])

    return (
        <>
            <Layout>
                <Header user={user}/>
                <Layout.Content>
                    <div className="container">
                        {user  ? <>
                                <AddForm/>
                                <TodoList/>
                            </>
                            : (
                                <>
                                    <AuthForm/>
                                </>)
                        }
                    </div>
                </Layout.Content>
            </Layout>

        </>

    );
};

export default App;