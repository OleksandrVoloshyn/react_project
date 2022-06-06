import React, {FC, useEffect} from "react"
import {useSearchParams} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hook";
import {genreAction} from "../../redux";
import css from './GenreBadge.module.css'


interface IGenresArr {
    genresArray: string[]
}

const GenreBadge: FC = () => {
    const {allGenres} = useAppSelector(({genreReducer}) => genreReducer);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1', with_genres: ''});
    const {register, handleSubmit} = useForm();

    useEffect(() => {
        dispatch(genreAction.getAll())
    }, [dispatch])

    // todo TS
    const submit: SubmitHandler<IGenresArr> = ({genresArray}): void => {
        let queryObj = Object.fromEntries(query.entries());
        queryObj.with_genres = genresArray.toString()
        setQuery(queryObj)
    }

    return (
        <div>
            {/*@ts-ignore*/}
            <form onSubmit={handleSubmit(submit)} className={css.filterForm}>
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