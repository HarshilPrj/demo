import { Suspense } from "react";
import PageNotFound from "../Components/PageNotFound";
import UserList from "../Components/UserList";
import PrivateRoute from "./PrivateRoute";
import Login from "../Components/Login";
import PublicRoute from "./PublicRoute";
import { useRoutes } from "react-router-dom";
import Test from "../Components/Test";
import AddUser from "../Components/AddUser";
import HeaderLayout from "../common/HeaderLayout";

const Router = () => {
    const routes = useRoutes([
        {
            path: "*",
            // element: <HeaderLayout />,
            children: [
                {
                    path: "*",
                    element: (
                        <Suspense>
                            <PageNotFound />
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/",
            // element: <HeaderLayout />,
            children: [
                {
                    path: "/",
                    element: (
                        <Suspense>
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        </Suspense>
                    ),
                },
            ],
        },
        {
            path: "/",
            element: <HeaderLayout />,
            children: [
                {
                    path: "/list",
                    element: (
                        <Suspense>
                            <PrivateRoute>
                                <UserList />
                            </PrivateRoute>
                        </Suspense>
                    ),
                },
                {
                    path: "/test",
                    element: (
                        <Suspense>
                            <PrivateRoute>
                                <Test />
                            </PrivateRoute>
                        </Suspense>
                    ),
                },
                {
                    path: "/add",
                    element: (
                        <Suspense>
                            <PrivateRoute>
                                <AddUser type="add" />
                            </PrivateRoute>
                        </Suspense>
                    ),
                },
                {
                    path: "/view/:id",
                    element: (
                        <Suspense>
                            <PrivateRoute>
                                <AddUser type="view" />
                            </PrivateRoute>
                        </Suspense>
                    ),
                },
                {
                    path: "/edit/:id",
                    element: (
                        <Suspense>
                            <PrivateRoute>
                                <AddUser type="edit" />
                            </PrivateRoute>
                        </Suspense>
                    ),
                },
            ],
        },
    ]);

    return routes;
};

export default Router;
