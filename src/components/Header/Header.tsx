import React, {ChangeEvent, FC, useState} from "react"
import {Link} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {urls} from "../../constants";
import {SwitchTheme} from "../SwitchTheme/SwitchTheme";

const Header: FC = () => {
    const [name, setName] = useState<string>('');

    return (
        <div className={css.header}>
            <div><Link to={'/'} className={css.home}>Movie DB</Link></div>

            <div>
                <input type="text" placeholder="movie's name"
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                <button>
                    <Link to={`${urls.search}?query=${name}`} className={css.find_btn}>Find</Link>
                </button>
            </div>

            <div className={css.header_right}>
                <SwitchTheme/>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};