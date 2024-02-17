import { RouteObject} from 'react-router-dom'
import AppLayout from '../components/Layouts/AppLayout'
import ErrorBoundry from '../components/RoutesElements/ErrorBoundry'
import NotMatch from '../components/RoutesElements/NotMatch'



import PublicRoutes from './publicRoutes'

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    errorElement: <ErrorBoundry />,
    children: [
        PublicRoutes,
  
      {path: '*', element: <NotMatch />},
    ],
  },
]


export default routes