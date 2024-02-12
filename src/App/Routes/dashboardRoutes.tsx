import { RouteObject } from "react-router-dom";
import PublicLayout from "../components/Layouts/PublicLayout";
import ErrorBoundry from "../components/RoutesElements/ErrorBoundry";
import NotMatch from "../components/RoutesElements/NotMatch";
import Layout from "../components/Layouts/Layout";

const dashboardRoutes: RouteObject[] = [
  {
    element: <Layout/>,

   errorElement: <ErrorBoundry />,
   children: [{ path: "*", element: <NotMatch /> }],
   },
];

export default dashboardRoutes;
