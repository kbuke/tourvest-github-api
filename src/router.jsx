import { createBrowserRouter } from "react-router";

import App from "./App";
import { Home } from "./Pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])