import React, {useState} from 'react';

import { auth,provider } from "../../config/firebaseSetup"
import {useDispatch} from "react-redux";
import {fetchUser} from "../../store/action-creators/user";

const AuthForm = () => {

    const dispatch = useDispatch()
    const signIn = () => {
        dispatch(fetchUser())
    }

    return (
        <div>
            <button onClick={signIn}>Login with google</button>
        </div>
    );
};

export default AuthForm;