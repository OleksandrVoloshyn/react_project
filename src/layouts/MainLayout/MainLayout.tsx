import {FC} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import './MainLayout.module.css'
// todo Подивитись чи правильно так обнуляти

const MainLayout: FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};