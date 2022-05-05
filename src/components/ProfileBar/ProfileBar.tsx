import React, {useEffect} from 'react';
import {useAppSelector} from "../../hooks";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../store/action-creators/user";
import './ProfileBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from "react-i18next";

const ProfileBar = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useDispatch()
    const {t} = useTranslation()
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
        <div className="profile-bar">
            <img className="profile-bar__image" src={userData.photoURL} alt=""/>
            <b className="profile-bar__name">{userData.displayName}</b>

            <a className="profile-bar__logout" href="#" onClick={logoutHandler}>
                <span>
                    {t('logoutBtb')}
                </span>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </a>
        </div>
    )
};

export default ProfileBar;