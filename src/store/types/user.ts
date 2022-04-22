import firebase from 'firebase/compat/app';

export interface UserState {
    user: firebase.User | null,
    error: null | string
}

export enum userActions {
    GET_USER="GET_USER",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    LOGOUT_USER = "LOGOUT_USER",

}
export interface getUserAction {
    type: userActions.GET_USER,
    payload: any
}

export interface fetchUserErrorAction {
    type: userActions.FETCH_USER_ERROR,
    payload: string
}

export interface fetchUserSuccessAction {
    type: userActions.FETCH_USER_SUCCESS,
    payload: any
}

export interface logoutUserAction {
    type: userActions.LOGOUT_USER,
}

export type UserAction = getUserAction | fetchUserErrorAction | fetchUserSuccessAction | logoutUserAction