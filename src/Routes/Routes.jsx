import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            }
        ]
    },
]);