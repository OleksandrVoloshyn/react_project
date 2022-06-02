import {FC} from "react"

import {GenreBadge, MoviesList} from "../../components";
import css from './MoviesPage.module.css'

const MoviesPage: FC = () => {
    return (
        <div className={css.wrap}>
            <GenreBadge/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};