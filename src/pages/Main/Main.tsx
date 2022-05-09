import React from 'react';
import AddForm from "../../components/AddForm/AddForm";
import TodoList from "../../components/TodoList/TodoList";
import AuthForm from "../../components/AuthForm/AuthForm";
import {iUser} from "../../components/Header/types";

const Main: React.FC<iUser> = ({user}) => {
    return (
        <>
            {user  ? <>
                    <AddForm/>
                    <TodoList/>
                </>
                : (
                    <>
                        <AuthForm/>
                    </>)
            }
        </>
    );
};

export default Main;