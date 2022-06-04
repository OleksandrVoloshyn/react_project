import React, {ChangeEvent, FC, useState} from "react"
import {Link} from "react-router-dom";

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";

const Header: FC = () => {
    const [name, setName] = useState<string>('');
    return (
        <div className={css.header}>
            <div><Link to={'/'} className={css.home}>Movie DB</Link></div>
            <div>
                <input type="text" placeholder="movie's name"
                       onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
                <button>
                    <Link to={`search/keyword?search=${name}`} className={css.find_btn}>Find</Link>
                </button>
            </div>
            <UserInfo/>
        </div>
    );
};

export {Header};