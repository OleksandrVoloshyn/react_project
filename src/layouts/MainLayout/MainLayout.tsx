import {FC} from "react";
import {Outlet, useSearchParams} from "react-router-dom";

import {Header} from "../../components";
import './MainLayout.module.css'
import {useAppSelector} from "../../hook";
// todo Подивитись чи правильно так обнуляти

const MainLayout: FC = () => {
    // const {prevPage, nextPage} = useAppSelector(({movieReducer}) => movieReducer);
    // const [query, setQuery] = useSearchParams({page: '1'});
    // let queryObj = Object.fromEntries(query.entries());
    //
    //
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
            <Header/>
            {/*<button disabled={!prevPage} onClick={prevBtn}>prev</button>*/}
            {/*<button disabled={!nextPage} onClick={nextBtn}>next</button>*/}
            <Outlet/>
        </div>
    );
};

export {MainLayout};