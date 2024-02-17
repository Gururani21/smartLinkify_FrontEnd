import { RouteObject } from "react-router-dom";
import PublicLayout from "../components/Layouts/PublicLayout";
import ErrorBoundry from "../components/RoutesElements/ErrorBoundry";
import NotMatch from "../components/RoutesElements/NotMatch";
import LandingPage from "../Pages/LandingPage";

const publicRoutes: RouteObject = {
  element: <PublicLayout />,

  errorElement: <ErrorBoundry />,
  children: [
    { path: "/", element: <LandingPage /> },
    { path: "*", element: <NotMatch /> },
  ],
};
export default publicRoutes;
