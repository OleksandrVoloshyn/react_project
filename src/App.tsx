import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesInfoPage, MoviesPage, NotFoundPage} from "./pages";
import {SearchPage} from "./pages/SearchPage/SearchPage";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MoviesInfoPage/>}/>
                <Route path={'search/keyword'} element={<SearchPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};
