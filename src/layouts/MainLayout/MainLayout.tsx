import {FC} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import './MainLayout.module.css'

const MainLayout: FC = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};