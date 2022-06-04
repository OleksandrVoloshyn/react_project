import React, {FC, useEffect, useRef} from "react"
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hook";
import {genreAction} from "../../redux";
import css from './GenreBadge.module.css'

const GenreBadge: FC = () => {
    const {allGenres} = useAppSelector(({genreReducer}) => genreReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', with_genres: ''});
    const filterForm = useRef(null);

    useEffect(() => {
        dispatch(genreAction.getAll())
    }, [dispatch])

    const filterMovies = (e: React.SyntheticEvent): void => {
        e.preventDefault()
        let queryObj = Object.fromEntries(query.entries());
        const data = []

        if (filterForm.current) {
            // @ts-ignore
            for (const el of filterForm.current) {
                if (el.checked) {
                    data.push(el.name)
                }
            }
        }

        queryObj.with_genres = data.join(',')
        setQuery(queryObj)
    }
    return (
        <form className={css.filterForm} ref={filterForm}>
            {allGenres.map(genre => <div key={genre.id}>
                <label>{genre.name}
                    <input type={"checkbox"} name={genre.id.toString()}/>
                </label>
            </div>)}
            <button onClick={filterMovies}>Filter</button>
        </form>
    );
};

export {GenreBadge};