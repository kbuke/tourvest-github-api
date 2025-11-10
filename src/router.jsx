import { createBrowserRouter } from "react-router";

import App from "./App";
import { Home } from "./Pages/Home/Home";
import { Repo } from "./Pages/Repos/Repo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/repos/:username",
                element: <Repo />
            }
        ]
    }
])