import React from 'react';
import {Layout} from "antd";
import {Link} from "react-router-dom";
import './Header.scss';
import ProfileBar from "../ProfileBar/ProfileBar";
import {iUser} from "./types";
import LanguageSelect from "../LanguageSelect/LanguageSelect";


const Header: React.FC<iUser> = ({user}) => {

    return (
        <>
            <Layout.Header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-title">
                            <Link to="/">ToDo</Link>
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