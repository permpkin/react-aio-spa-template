import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { IndexRoute, IndexRouteAction, IndexRouteLoader } from "@/routes/IndexRoute";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <IndexRoute/>,
    action: IndexRouteAction,
    loader: IndexRouteLoader,
    // children: [
    // ]
  },
]);

const AppRouterProvider = () => <RouterProvider router={AppRouter} />

export default AppRouterProvider