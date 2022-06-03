import {FC, useEffect} from "react"
import {useAppSelector} from "../../hook";
import {Link, useLocation, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {movieAction} from "../../redux";

const SearchPage: FC = () => {
    const {searchResult, prevPage, nextPage} = useAppSelector(({movieReducer}) => movieReducer);
    // const dispatch = useDispatch();
    // const data = useLocation();
    // console.log(data)
    // const [query, setQuery] = useSearchParams({page: '1', search: 'super'});
    // let queryObj = Object.fromEntries(query.entries());

    // useEffect(() => {
    // @ts-ignore
    // dispatch(movieAction.getBySearchName({name: 'super'}))
    // }, [dispatch])
    // const prevBtn = (): void => {
    //     queryObj.page = (+queryObj.page - 1).toString()
    //     setQuery(queryObj)
    // }
    //
    // const nextBtn = (): void => {
    //     queryObj.page = (+queryObj.page + 1).toString()
    //     setQuery(queryObj)
    // }
    return (
        <div>
            {/*<button disabled={!prevPage} onClick={prevBtn}>prev</button>*/}
            {/*<button disabled={!nextPage} onClick={nextBtn}>next</button>*/}
            {searchResult?.map(movie => <div key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.name}</Link></div>)}
            {/*    todo pagination*/}
        </div>
    );
};

export {SearchPage};