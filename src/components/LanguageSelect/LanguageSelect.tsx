import React from 'react';
import './LanguageSelect.scss'
import {availableLanguages} from "../../config/i18n";
import {Select} from "antd";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const LanguageSelect = () => {

    const {i18n} = useTranslation()
    const onChangeLanguage = (e: string) => {
        i18n.changeLanguage(e)
    }
    return (
        <div className="language-select">
            <Select defaultValue={i18n.language} onChange={onChangeLanguage}>
                {availableLanguages.map((language) => (
                    <Select.Option value={language} key={language}>{language}</Select.Option>
                ))}
            </Select>
            <FontAwesomeIcon className="language-select__icon" color="black" icon={faAngleDown}/>
        </div>

    );
};

export default LanguageSelect;