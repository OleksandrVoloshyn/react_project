import {FC} from "react"
import StarRatings from 'react-star-ratings';

import {PosterPreview} from "../PosterPreview/PosterPreview";
import css from './MoviesListCard.module.css'

interface IProps {
    movie: any
}

const MoviesListCard: FC<IProps> = ({movie}) => {
    return (
        <div className={css.wrap}>
            <PosterPreview movie={movie}/>
            {movie.title}
            <StarRatings
                rating={movie.vote_average}
                starRatedColor="blue"
                numberOfStars={10}
                name='rating'
                starDimension={'10px'}
                starSpacing={'3px'}
            />
            {movie.vote_average}
        </div>
    );
};

export {MoviesListCard};