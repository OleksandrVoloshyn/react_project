import {FC} from "react"
import StarRatings from 'react-star-ratings';

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MoviesListCard.module.css'
import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    const {title, vote_average} = movie
    return (
        <div className={css.wrap}>
            <PosterPreview movie={movie}/>
            <span>{title}</span>

            <StarRatings
                rating={vote_average}
                starRatedColor="blue"
                numberOfStars={10}
                name='rating'
                starDimension={'10px'}
                starSpacing={'4px'}
            />

            <span>{vote_average}</span>
        </div>
    );
};

export {MoviesListCard};