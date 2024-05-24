import { Navigate } from "react-router-dom";
import { Suspense } from "react";
import React from "react";

const PublicRoute = ({ children }) => {
    const accessToken = localStorage?.getItem("token");

    if (accessToken) {
        return <Navigate to="/list" />;
    }

    return (
        <Suspense>
            <>{children}</>
        </Suspense>
    );
};

export default PublicRoute;
