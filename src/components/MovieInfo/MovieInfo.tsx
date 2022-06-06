import {FC, useEffect} from "react"
import {useParams} from "react-router-dom";
import StarRatings from "react-star-ratings";

import {useAppDispatch, useAppSelector} from "../../hook";
import {movieAction} from "../../redux";
import {img500} from "../../constants";
import css from './MovieInfo.module.css'

const MovieInfo: FC = () => {
    const {chosenMovie} = useAppSelector(({movieReducer}) => movieReducer);
    const dispatch = useAppDispatch();
    const {id} = useParams();

    let productionCompanyNames: string[] = []
    if (chosenMovie?.production_companies) {
        chosenMovie?.production_companies.forEach(value => {
            productionCompanyNames.push(value.name)
        })
    }

    useEffect(() => {
        if (id) {
            dispatch(movieAction.getById({id}))
        }
    }, [dispatch, id])

    return (
        <div>
            {!chosenMovie ?
                <div>Ooops don't have results. Click to logo and go to main page</div>
                : <div className={css.wrap}>
                    <img src={img500 + chosenMovie.poster_path} alt={chosenMovie.title}/>
                    <div className={css.fields}>
                        <div>title: {chosenMovie.title}</div>
                        <div>original_title: {chosenMovie.original_title}</div>
                        <div>genres: {chosenMovie.genres_name?.replaceAll(',', ', ')}</div>
                        <div>overview: {chosenMovie.overview}</div>
                        <div>original_language: {chosenMovie.original_language}</div>
                        <div>status: {chosenMovie.status}</div>
                        <div>release_date: {chosenMovie.release_date}</div>
                        <div>vote_count: {chosenMovie.vote_count}</div>
                        <StarRatings
                            rating={chosenMovie.vote_average}
                            starRatedColor="blue"
                            numberOfStars={10}
                            name='rating'
                            starDimension={'10px'}
                            starSpacing={'4px'}
                        />
                        <div>homepage: <a href={chosenMovie.homepage}>{chosenMovie.homepage}</a></div>
                        <div>popularity: {chosenMovie.popularity}</div>
                        <div>adult: {chosenMovie.adult.toString()}</div>
                        <div>budget: {chosenMovie.budget}</div>
                        <div>id: {chosenMovie.id}</div>
                        <div>imdb_id: {chosenMovie.imdb_id}</div>
                        <div>revenue: {chosenMovie.revenue}</div>
                        <div>runtime: {chosenMovie.runtime}</div>

                        {chosenMovie.tagline && <div>tagline: {chosenMovie.tagline}</div>}
                        {{productionCompanyNames} &&
                            <div>Production Companies: {productionCompanyNames.toString().replaceAll(',', ', ')}</div>}
                    </div>
                </div>}
        </div>
    );
};

export {MovieInfo};