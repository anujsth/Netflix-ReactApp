import { createBrowserRouter, Route } from "react-router-dom";
import App from "./App";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Protected from "./Protected";
import { useSelector } from "react-redux";
import MoviePlayer from "./pages/MoviePlayer";
import Search from "./pages/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  { path: "/video/:id", element: <MoviePlayer /> },
  { path: "/search", element: <Search /> },
]);
