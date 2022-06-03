import {FC, useEffect} from "react"
import {useParams} from "react-router-dom";

import css from './MovieInfo.module.css'
import {useAppDispatch, useAppSelector} from "../../hook";
import {movieAction} from "../../redux";
import {urls} from "../../constants";

const MovieInfo: FC | any = () => {
    const {chosenMovie} = useAppSelector(({movieReducer}) => movieReducer);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            dispatch(movieAction.getById({id}))
        }
    }, [dispatch, id])

    return (
        <div>
            {chosenMovie &&
                <div className={css.wrap}>
                    <img src={urls.img500 + chosenMovie.poster_path} alt={chosenMovie.title}/>
                    <div>
                        <div>adult: {chosenMovie.adult.toString()}</div>
                        <div>budget: {chosenMovie.budget}</div>
                        <div>genres: {chosenMovie.genres_name}</div>
                        <div>homepage: {chosenMovie.homepage}</div>
                        <div>id: {chosenMovie.id}</div>
                        <div>imdb_id: {chosenMovie.imdb_id}</div>
                        <div>original_language: {chosenMovie.original_language}</div>
                        <div>original_title: {chosenMovie.original_title}</div>
                        <div>overview: {chosenMovie.overview}</div>
                        <div>popularity: {chosenMovie.popularity}</div>
                        <div>release_date: {chosenMovie.release_date}</div>
                        <div>revenue: {chosenMovie.revenue}</div>
                        <div>runtime: {chosenMovie.runtime}</div>
                        <div>status: {chosenMovie.status}</div>
                        <div>tagline: {chosenMovie.tagline}</div>
                        <div>title: {chosenMovie.title}</div>
                        <div>vote_average: {chosenMovie.vote_average}</div>
                        <div>vote_count: {chosenMovie.vote_count}</div>
                    </div>
                </div>}
        </div>
    );
};

export {MovieInfo};