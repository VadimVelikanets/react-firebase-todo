import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../store/action-creators/user";

const ProfileBar = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useDispatch()
    interface iUser {
        uid: number,
        email: string,
        displayName: string,
        photoURL: string | undefined
    }
    const userData: iUser = Object.assign({
        uid: user?.user?.uid,
        email: user?.user?.email,
        displayName: user?.user?.displayName,
        photoURL: user?.user?.photoURL,
    })

    const logoutHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(logoutUser())
    }

    return (
        <div>
            <b>{userData.displayName}</b>
            <img src={userData.photoURL} alt=""/>
            <a href="#" onClick={logoutHandler}>Logout</a>
        </div>
    );
};

export default ProfileBar;