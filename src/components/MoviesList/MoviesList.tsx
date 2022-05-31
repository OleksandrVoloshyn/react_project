import {FC, useEffect} from "react"

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'
import {useSearchParams} from "react-router-dom";

const MoviesList: FC = () => {
        const {results} = useAppSelector(state => state.movieReducer);
        const dispatch = useAppDispatch();
        const [query, setQuery] = useSearchParams({page: '1'});

        useEffect(() => {
            dispatch(movieAction.getAll())
        }, [dispatch])

        const prevPage = () => {
            let queryObj = Object.fromEntries(query.entries());
            // @ts-ignore
            queryObj.page--
            setQuery(queryObj)

        }
        const nextPage = () => {
            let queryObj = Object.fromEntries(query.entries());
            // @ts-ignore
            queryObj.page++
            setQuery(queryObj)
        }
        return (
            <div>
                <div className={css.pagination}>
                    <button onClick={prevPage}>Prev</button>
                    <button onClick={nextPage}>Next</button>
                </div>
                <div className={css.wrap}>
                    <div className={css.sidebar}>FooBar</div>
                    <div className={css.movies}>{results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}</div>
                </div>

            </div>
        );
    }
;

export {MoviesList};