import {FC} from "react"
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {img200} from "../../constants";

interface IProps {
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const posterUrl = img200 + poster_path
    const linkTo = `/movies/${id.toString()}`

    return (
        <div>
            <Link to={linkTo}>
                <img src={posterUrl} alt={title}/>
            </Link>
        </div>
    );
};

export {PosterPreview};