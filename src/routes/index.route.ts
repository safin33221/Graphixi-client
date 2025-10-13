import App from "@/App";
import AdminLogin from "@/pages/auth/Login";



import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: Home,
                index: true
            }
        ]
    },
    {
        Component: AdminLogin,
        path: "/login"
    }
])
