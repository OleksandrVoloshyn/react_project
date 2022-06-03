import {FC, useEffect} from "react"
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hook";
import {movieAction} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import css from './MoviesList.module.css'

const MoviesList: FC = () => {
        const {results, prevPage, nextPage} = useAppSelector(state => state.movieReducer);
        const dispatch = useAppDispatch();
        const [query, setQuery] = useSearchParams({page: '1'});
        let queryObj = Object.fromEntries(query.entries());

        useEffect(() => {
            if (queryObj.with_genres) {
                dispatch(movieAction.getByGenresId({ids: queryObj.with_genres, page: queryObj.page}))
            } else {
                dispatch(movieAction.getMovies(queryObj.page))
            }
            //    todo Якщо в масив залежностей передавати queryObj зациклювання
        }, [dispatch, queryObj.page, queryObj.with_genres])

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
                {/*<div>*/}
                <div className={css.pagination}>
                    <button onClick={prevBtn} disabled={!prevPage}>Prev</button>
                    <button onClick={nextBtn} disabled={!nextPage}>Next</button>
                </div>
                <div className={css.movies}>{results.map(movie => <MoviesListCard key={movie.id}
                                                                                  movie={movie}/>)}</div>
                {/*</div>*/}
            </div>
        );
    }
;

export {MoviesList};