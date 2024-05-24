import { Suspense } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const accessToken = localStorage.getItem("token");

    if (!accessToken) {
        return <Navigate to="/" />;
    }

    return <Suspense>{children}</Suspense>;
};

export default PrivateRoute;
