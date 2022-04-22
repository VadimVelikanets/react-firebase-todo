import React from 'react';
import {Layout} from "antd";
import './Header.scss';
import ProfileBar from "../ProfileBar/ProfileBar";
import {inflate} from "zlib";
import firebase from "firebase/compat/app";

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
                        {user &&  <ProfileBar/>}
                    </div>

                </div>
            </Layout.Header>
        </>
    );
};

export default Header;