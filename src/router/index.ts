import React from "react";
import Main from "../pages/Main/Main";
import EditTodo from "../pages/EditTodo/EditTodo";
import {iUser} from "../components/Header/types";
interface iRoute {
    path: string;
    element: React.FC<any>;
    exact?: boolean
}

export enum routerNames {
    MAIN = '/',
    EDIT_TODO = '/edit/:id'
}

export const publicRoutes: iRoute[] = [
    {
        path: routerNames.MAIN,
        element: Main
    }
]

export const privateRoutes: iRoute[] = [
    {
        path: routerNames.MAIN,
        element:  Main,
    },
    {
        path: routerNames.EDIT_TODO,
        element: EditTodo
    },
]
