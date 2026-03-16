import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProjectPage from "./components/projects/ProjectPage";
import Layout from "./Layout";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/projects/:slug",
                element: <ProjectPage />,
            },
        ],
    },
]);
