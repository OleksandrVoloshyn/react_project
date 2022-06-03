import {FC, useEffect, useRef} from "react"

import {useAppDispatch, useAppSelector} from "../../hook";
import {genreAction, movieAction} from "../../redux";
import css from './GenreBadge.module.css'
import {useSearchParams} from "react-router-dom";

const GenreBadge: FC = () => {
    const {allGenres} = useAppSelector(({genreReducer}) => genreReducer);
    const dispatch = useAppDispatch();
    const ids = useRef(null);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        dispatch(genreAction.getAll())
    }, [dispatch])

    // @ts-ignore
    const filterMovies = (e) => {
        e.preventDefault()
        // @ts-ignore
        const data = []
        // @ts-ignore
        for (const xxx of ids.current) {
            if (xxx.checked) {
                data.push(xxx.name)
            }
        }
        let queryObj = Object.fromEntries(query.entries());
        queryObj.with_genres = data.toString()
        console.log(data.toString());
        console.log(typeof data.toString());
        // @ts-ignore
        setQuery(queryObj)
        dispatch(movieAction.getByGenresId({ids: data}))
    }
    return (
        <div className={css.wrap}>
            <form className={css.filterForm} ref={ids}>
                {allGenres.map(genre =>
                    <div key={genre.id}>
                        <label>{genre.name}
                            <input type={"checkbox"} name={genre.id.toString()}/>
                        </label>
                    </div>)}
                <button onClick={filterMovies}>Filter</button>
            </form>
        </div>
    );
};

export {GenreBadge};