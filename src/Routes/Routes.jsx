import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import UnityServe from "../Shared/ProjectDetails/UnityServe";
import LearnTogether from "../Shared/ProjectDetails/LearnTogether";
import NexTour from "../Shared/ProjectDetails/NexTour";

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
            },
            {
                path: "/projects/UnityServe",
                element: <UnityServe></UnityServe>
            },
            {
                path: "/projects/LearnTogether",
                element: <LearnTogether></LearnTogether>
            },
            {
                path: "/projects/NexTour",
                element: <NexTour/>
            }
        ]
    },
]);