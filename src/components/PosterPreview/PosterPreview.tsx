import {FC} from "react"
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";

interface IProps {
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const url = 'https://image.tmdb.org/t/p/w300' + poster_path
    return (
        <div>
            <Link to={id.toString()} state={movie}>
                <img src={url} alt={title}/>
            </Link>
        </div>
    );
};

export {PosterPreview};