import {FC} from "react"
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {urls} from "../../constants";

interface IProps {
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const posterUrl = urls.img200 + poster_path

    return (
        <div>
            <Link to={id.toString()} state={movie}>
                <img src={posterUrl} alt={title}/>
            </Link>
        </div>
    );
};

export {PosterPreview};