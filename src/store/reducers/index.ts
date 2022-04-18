import {combineReducers} from "redux";
import {todoReducer} from "./todoReduces";
import {userReduces} from "./userReduces";

export const rootReduces = combineReducers({
    todo: todoReducer,
    user: userReduces
})