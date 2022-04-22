import {Dispatch} from "redux";
import {todoActions} from "../types/todo";
import {UserAction, userActions} from "../types/user";
import {auth, provider} from "../../config/firebaseSetup";


export const getUser = (user: object) => {
    return {
        type: userActions.GET_USER,
        payload: user
    }
}

export const fetchUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            await auth.signInWithPopup(provider).catch(alert);
            dispatch(({type: userActions.FETCH_USER_SUCCESS, payload: auth.currentUser}))
            localStorage.setItem('userData', JSON.stringify(auth.currentUser ))
        }
        catch (e){
            dispatch({type: userActions.FETCH_USER_ERROR, payload : "Auth error!"})
        }
    }
}

export const logoutUser = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            await  auth.signOut();
            dispatch(({type: userActions.LOGOUT_USER}))
            localStorage.removeItem('userData')
        }
        catch (e){
            dispatch({type: userActions.FETCH_USER_ERROR, payload : "Auth error!"})
        }
    }
}