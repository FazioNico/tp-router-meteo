import { createBrowserRouter } from "react-router-dom";
import { Search } from "./pages/Search";
import { Result } from "./pages/Result";

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