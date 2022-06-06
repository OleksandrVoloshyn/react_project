import {FC} from "react"
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import {alternativeUrlPhoto, img200} from "../../constants";
import css from './PosterPreview.module.css'

interface IProps {
    movie: IMovie
}

const PosterPreview: FC<IProps> = ({movie: {id, title, poster_path}}) => {
    const posterUrl = poster_path ? img200 + poster_path : alternativeUrlPhoto
    const linkTo = `/movies/${id.toString()}`

    return (
        <div>
            {/*
             Можна передавати фільм в State і через useLocation відхоплювати на наступній компоненті,
            але так як наступною буде MovieInfo, яка наскільки я розумію має давати максимальну інфу по фільму
            то я роблю додаткой запит на кожен фільм по Id, тому що так я отримаю на багато більше інформації з DB
            */}
            <Link to={linkTo}>
                <img src={posterUrl} alt={title} className={css.w200}/>
            </Link>
        </div>
    );
};

export {PosterPreview};