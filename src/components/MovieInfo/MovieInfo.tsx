import {FC, useEffect, useState} from "react"
import {useLocation} from "react-router-dom";

import css from './MovieInfo.module.css'
import {IGenre, IMovie} from "../../interfaces";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieAction} from "../../redux";

const MovieInfo: FC = () => {
    const {state} = useLocation();
    const dispatch = useAppDispatch();
    // const [genres, setGenres] = useState<IGenre | null>(null);

    const {
        title, overview, original_title, original_language, poster_path,
        genre_ids, popularity, release_date, vote_count, vote_average, adult
    } = state as IMovie
    useEffect(() => {
        dispatch(movieAction.getGenres(genre_ids))
    }, [])


    return (
        <div className={css.wrap}>
            <img src={'https://image.tmdb.org/t/p/w300/' + poster_path} alt={title}/>
            <div>
                <div>title: {title}</div>
                <div>overview: {overview}</div>

                <div>genre_ids: {overview}</div>

                <div>original_title: {original_title}</div>
                <div>original_language: {original_language}</div>
                <div>popularity: {popularity}</div>
                <div>release_date: {release_date}</div>
                <div>vote_count: {vote_count}</div>
                <div>vote_average: {vote_average}</div>
                <div>adult: {adult}</div>
            </div>
        </div>
    );
};

export {MovieInfo};