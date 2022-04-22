import {UserState, UserAction, userActions} from "../types/user";

const initialState : UserState = {
    user: null,
    error: null
}

export const userReduces = (state=initialState, action: UserAction) : UserState | undefined =>{
    switch (action.type) {
        case userActions.GET_USER:
            return { user: action.payload, error: null}
        case userActions.FETCH_USER_SUCCESS:
            return { user: action.payload, error: null}
        case userActions.FETCH_USER_ERROR:
            return { user: null, error: action.payload}
        case userActions.LOGOUT_USER:
            return { user: null, error: null}
        default:
            return state
    }
}
