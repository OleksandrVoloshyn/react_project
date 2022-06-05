import {FC, useEffect} from "react"
import {Link, useSearchParams} from "react-router-dom";

import css from './SearchPage.module.css'
import {useAppDispatch, useAppSelector} from "../../hook";
import {movieAction} from "../../redux";

const SearchPage: FC = () => {
    const dispatch = useAppDispatch();
    const {searchResult, prevPage, nextPage} = useAppSelector(({movieReducer}) => movieReducer);
    const [query, setQuery] = useSearchParams({page: '1', search: ''});
    let queryObj = Object.fromEntries(query.entries());
    console.log(searchResult)

    useEffect(() => {
        dispatch(movieAction.getBySearchName({name: queryObj.search, page: queryObj.page}))
    }, [dispatch, queryObj.search, queryObj.page])

    const prevBtn = (): void => {
        queryObj.page = (+queryObj.page - 1).toString()
        setQuery(queryObj)
    }
    const nextBtn = (): void => {
        queryObj.page = (+queryObj.page + 1).toString()
        setQuery(queryObj)
    }
    return (
        <div className={css.wrap}>
            {searchResult?.length ?
                <div>
                    <button disabled={!prevPage} onClick={prevBtn}>prev</button>
                    <button disabled={!nextPage} onClick={nextBtn}>next</button>
                </div> :
                <div>No Results</div>}

            {searchResult?.map(movie => <div key={movie.id}>
                <Link to={`/movies/${movie.id}`} className={css.name}>Name: {movie.title}</Link></div>)}
        </div>
    );
};

export {SearchPage};