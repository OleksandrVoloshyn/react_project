import {FC, useEffect} from "react"
import {useLocation} from "react-router-dom";

import css from './MovieInfo.module.css'
import {IMovie} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreAction} from "../../redux";

const MovieInfo: FC = () => {
    const {state} = useLocation();
    const {currentMovieGenres} = useAppSelector(state1 => state1.genreReducer);
    const dispatch = useAppDispatch();

    const {
        title, overview, original_title, original_language, poster_path,
        genre_ids, popularity, release_date, vote_count, vote_average, adult
    } = state as IMovie

    useEffect(() => {
        dispatch(genreAction.getCurrentMovieGenres({ids: genre_ids}))
    }, [dispatch, genre_ids])


    return (
        <div className={css.wrap}>
            <img src={'https://image.tmdb.org/t/p/w500/' + poster_path} alt={title}/>
            <div>
                <div>title: {title}</div>
                <div>overview: {overview}</div>
                <div>genre_ids: {`${currentMovieGenres}`}</div>
                <div>original_title: {original_title}</div>
                <div>original_language: {original_language}</div>
                <div>popularity: {popularity}</div>
                <div>release_date: {release_date}</div>
                <div>vote_count: {vote_count}</div>
                <div>adult: {adult.toString()}</div>
                <div>vote_average: {vote_average}</div>
            </div>
        </div>
    );
};

export {MovieInfo};