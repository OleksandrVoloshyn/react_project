import {FC, useRef} from "react"

import css from './Header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {useDispatch} from "react-redux";
import {movieAction} from "../../redux";

const Header: FC = () => {
    const search_name = useRef(null);
    const dispatch = useDispatch();

    // @ts-ignore
    const searchByName = (e) => {
        e.preventDefault()
        // @ts-ignore
        dispatch(movieAction.getBySearchName(search_name.current.value))
    //    todo render new component only with names
    }
    return (
        <div className={css.header}>
            <div>Movie DB</div>
            <div>
                <input type="text" placeholder="movie's name" ref={search_name}/>
                <button onClick={searchByName}>Find</button>
            </div>
            <UserInfo/>
        </div>
    );
};

export {Header};