import {FC, useEffect, useRef} from "react"

import {useAppDispatch, useAppSelector} from "../../hooks";
import {genreAction, movieAction} from "../../redux";
import css from './GenreBadge.module.css'

const GenreBadge: FC = () => {
    const {allGenres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const ids = useRef(null);

    useEffect(() => {
        dispatch(genreAction.getAll())
    }, [dispatch, allGenres])

    // @ts-ignore
    const filterMovies = (e) => {
        e.preventDefault()
        // @ts-ignore
        const data = []
        // @ts-ignore
        for (const xxx of ids.current) {
            if(xxx.checked){
                data.push(+xxx.name)
            }
        }
        // @ts-ignore
        dispatch(movieAction.getByGenresId({ids:data}))
    }
    return (
        <div className={css.wrap}>
            <span>Genres List:</span>
            <hr/>
            <form className={css.filterForm} ref={ids}>
                {allGenres.map(genre =>
                    <div key={genre.id}><label>{genre.name}
                        <input type={"checkbox"} name={genre.id.toString()}/>
                    </label></div>)}
                <button onClick={filterMovies}>Filter</button>
            </form>
        </div>
    );
};

export {GenreBadge};