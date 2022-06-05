import {FC} from "react"
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {img200} from "../../constants";

interface IProps {
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({movie: {id, title, poster_path}}) => {
    const posterUrl = img200 + poster_path
    const linkTo = `/movies/${id.toString()}`

    return (
        <div>
            {/*
             Можна передавати фільм в State і через useLocation відхоплювати на наступній компоненті,
            але так як наступною буде MovieInfo, яка наскільки я розумію має давати максимальну інфу по фільму
            то я роблю додаткой запит на кожен фільм по Id тому що так я отримаю на багато більше інформації з DB
            */}
            <Link to={linkTo}>
                <img src={posterUrl} alt={title}/>
            </Link>
        </div>
    );
};

export {PosterPreview};