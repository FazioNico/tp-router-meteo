import { createBrowserRouter } from "react-router-dom";
import { Search } from "./Search";
import { Result } from "./Result";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Search />
  },
  {
    path: '/:city',
    element: <Result />
  }
]);