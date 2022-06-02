import {FC, useEffect, useState} from "react"
import {useLocation, useParams} from "react-router-dom";

import css from './MovieInfo.module.css'
import {IMovie} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hook";
import {genreAction, movieAction} from "../../redux";

const MovieInfo: FC | any = () => {
    const {state} = useLocation();
    // @ts-ignore
    const [data, setData] = useState<IMovie>(state);

    const {currentMovieGenres} = useAppSelector(({genreReducer}) => genreReducer);
    const {chosenMovie} = useAppSelector(({movieReducer}) => movieReducer);

    const dispatch = useAppDispatch();
    const id = useParams();

    useEffect(() => {
        if (state) {
            // @ts-ignore
            dispatch(genreAction.getCurrentMovieGenres({genre_ids: state.genre_ids}))
            // @ts-ignore
            setData(state)
        } else if (!state && !chosenMovie) {
            // @ts-ignore
            dispatch(movieAction.getById(id));
        }
        if (chosenMovie) {
            setData(chosenMovie)
        }
    }, [dispatch, state, chosenMovie, id])


    return (
        !data ? 'Loading...'
            : <div className={css.wrap}>
                <img src={'https://image.tmdb.org/t/p/w500/' + data.poster_path} alt={data.title}/>
                <div>
                    <div>title: {data.title}</div>
                    <div>overview: {data.overview}</div>
                    {/*@ts-ignore*/}
                    <div>genres: {data.genres ? `${data.genres}` : `${currentMovieGenres}`}</div>
                    <div>original_title: {data.original_title}</div>
                    <div>original_language: {data.original_language}</div>
                    <div>popularity: {data.popularity}</div>
                    <div>release_date: {data.release_date}</div>
                    <div>vote_count: {data.vote_count}</div>
                    <div>adult: {data.adult.toString()}</div>
                    <div>vote_average: {data.vote_average}</div>
                </div>
            </div>
    );
};

export {MovieInfo};