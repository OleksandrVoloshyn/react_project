import {FC, useEffect, useMemo} from "react"
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hook";
import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'

const MoviesList: FC = () => {
        const {results, prevPage, nextPage} = useAppSelector(({movieReducer}) => movieReducer);
        const dispatch = useAppDispatch();
        const [query, setQuery] = useSearchParams({page: '1'});
        const queryObj = useMemo(() => Object.fromEntries(query.entries()), [query]);

        useEffect(() => {
            dispatch(movieAction.getMovies(queryObj))
        }, [dispatch, queryObj])

        const prevBtn = (): void => {
            queryObj.page = (+queryObj.page - 1).toString()
            setQuery(queryObj)
        }

        const nextBtn = (): void => {
            queryObj.page = (+queryObj.page + 1).toString()
            setQuery(queryObj)
        }

        return (
            <div>
                <div className={css.pagination}>
                    <button onClick={prevBtn} disabled={!prevPage}>Prev</button>
                    <button onClick={nextBtn} disabled={!nextPage}>Next</button>
                </div>
                <div className={css.movies}>
                    {results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                </div>
            </div>
        );
    }
;

export {MoviesList};