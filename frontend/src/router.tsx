import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProjectPage from "./components/projects/ProjectPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/projects/:slug",
        element: <ProjectPage />,
    },
]);
