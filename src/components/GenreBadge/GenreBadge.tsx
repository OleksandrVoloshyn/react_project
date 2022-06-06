import React, {FC, useEffect} from "react"
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hook";
import {genreAction} from "../../redux";
import css from './GenreBadge.module.css'

type GenresForm = {
    genresArray: string[]
}

const GenreBadge: FC = () => {
    const {allGenres} = useAppSelector(({genreReducer}) => genreReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', with_genres: ''});
    const {register, handleSubmit} = useForm<GenresForm>();

    useEffect(() => {
        dispatch(genreAction.getAll())
    }, [dispatch])

    const submit = handleSubmit(({genresArray}) => {
        let queryObj = Object.fromEntries(query.entries());
        queryObj.with_genres = genresArray.toString()
        setQuery(queryObj)
    })

    return (
        <div>
            <form onSubmit={submit} className={css.filterForm}>
                {allGenres.map(genre => <div key={genre.id}>
                    <label>{genre.name}
                        <input type={"checkbox"} {...register('genresArray')} value={genre.id}/>
                    </label>
                </div>)}
                <button>Filter</button>
            </form>
        </div>

    );
};

export {GenreBadge};