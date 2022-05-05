import React from 'react';
import {Layout} from "antd";
import './Header.scss';
import ProfileBar from "../ProfileBar/ProfileBar";
import firebase from "firebase/compat/app";

import LanguageSelect from "../LanguageSelect/LanguageSelect";

interface iUser {
    user: firebase.User | null | undefined
}

const Header: React.FC<iUser> = ({user}) => {

    return (
        <>
            <Layout.Header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-title">
                            ToDo
                        </div>
                        <div className="header-right-wrapper">
                            {user &&  <ProfileBar/>}
                            <LanguageSelect/>
                        </div>

                    </div>

                </div>
            </Layout.Header>
        </>
    );
};

export default Header;