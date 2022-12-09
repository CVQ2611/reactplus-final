import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../defaultLayout";
import DashboardPage from "../page/dashboardPage";
import LogInPage from "../page/logInPage";
import RegisterPage from "../page/registerPage";
import StartPage from "../page/startPage";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <StartPage />
            },
            {
                path: '/register',
                element: <RegisterPage />
            }, {
                path: '/login',
                element: <LogInPage />
            }, {
                path: '/dashboard',
                element: <DashboardPage />
            },
        ]
    }
])