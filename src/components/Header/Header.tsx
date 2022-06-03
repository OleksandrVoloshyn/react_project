import React, {FC, useRef} from "react"

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {useDispatch} from "react-redux";
import {movieAction} from "../../redux";
import {Link} from "react-router-dom";

const Header: FC = () => {
    let search_name = useRef(null);
    const dispatch = useDispatch();

    const searchByName = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        // @ts-ignore
        dispatch(movieAction.getBySearchName({name: search_name.current.value}))
        //    todo render new component only with names
    }
    return (
        <div className={css.header}>
            <div><Link to={'/'}>Movie DB</Link></div>
            <div>
                <input type="text" placeholder="movie's name" ref={search_name}/>
                <button onClick={searchByName}><Link to={'search/keyword'}>Find</Link></button>
            </div>
            <UserInfo/>
        </div>
    );
};

export {Header};