import React, {useState} from 'react';
import './AuthForm.scss';
import {useDispatch} from "react-redux";
import {fetchUser} from "../../store/action-creators/user";
import {Button} from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


const AuthForm = () => {

    const dispatch = useDispatch()
    const signIn = () => {
        dispatch(fetchUser())
    }

    return (
        <div className="auth-form">
            <Button type="primary" onClick={signIn}>
                <span>Login with &nbsp;</span>
                <FontAwesomeIcon icon={faGoogle}/>
            </Button>
        </div>
    );
};

export default AuthForm;