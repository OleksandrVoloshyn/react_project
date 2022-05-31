import {FC} from "react"

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";

const Header: FC = () => {
    return (
        <div className={css.header}>
            <div>Movie DB</div>
            <UserInfo/>
        </div>
    );
};

export {Header};