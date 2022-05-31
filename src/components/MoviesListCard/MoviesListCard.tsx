import {FC} from "react"

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
        </div>
    );
};

export {MoviesListCard};