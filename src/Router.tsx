import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { user } from "./@types/user";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home user={user}/>,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />
}