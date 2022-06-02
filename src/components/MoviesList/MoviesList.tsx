import {FC, useEffect} from "react"

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'
import {useSearchParams} from "react-router-dom";

const MoviesList: FC = () => {
        const {results,prevPage,nextPage} = useAppSelector(state => state.movieReducer);
        const dispatch = useAppDispatch();
        const [query, setQuery] = useSearchParams({page: '1'});

        useEffect(() => {
            const data = query.get('page')
            // @ts-ignore
            dispatch(movieAction.getAll({page: data}))
        }, [dispatch, query, prevPage,nextPage])

        const prev = () => {
            let queryObj = Object.fromEntries(query.entries());
            // @ts-ignore
            queryObj.page--
            setQuery(queryObj)

        }
        const next = () => {
            let queryObj = Object.fromEntries(query.entries());
            // @ts-ignore
            queryObj.page++
            setQuery(queryObj)
        }
        return (
            <div>
                <div className={css.pagination}>
                    <button onClick={prev} disabled={!prevPage}>Prev</button>
                    <button onClick={next} disabled={!nextPage}>Next</button>
                </div>
                <div className={css.wrap}>
                    <div className={css.movies}>{results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
                </div>

            </div>
        );
    }
;

export {MoviesList};