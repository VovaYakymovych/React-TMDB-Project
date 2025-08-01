import Header from "../../components/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import './MainLayout.css'


const MainLayout = () => {
    return (
        <div className={'MainLayout'}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;