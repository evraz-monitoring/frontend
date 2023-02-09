import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Period from "../components/Period";
const Layout = () => {
    return (
        <>
            <Header />
            <Period />
            <Outlet />
        </>
    );
};

export default Layout;
