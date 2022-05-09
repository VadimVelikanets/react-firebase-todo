import React from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {iUser} from "../components/Header/types";
import Main from "../pages/Main/Main";

const AppRouter: React.FC<iUser> = ({user}) => {
    return (user ? <Routes>
            {privateRoutes.map((item,index) => <Route key={index} element={<item.element user={user}/>} path={item.path}></Route>)}
            <Route path='*' element={<Main user={user}/>} />
    </Routes> :
        <Routes>
            {publicRoutes.map((item,index) => <Route key={index} element={<item.element user={user}/>} path={item.path}></Route>)}
            <Route path='*' element={<Main user={user}/>} />
        </Routes>);
};

export default AppRouter;