import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header.jsx";

function HeaderLayout() {
    return (
        <>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
}

export default HeaderLayout;
