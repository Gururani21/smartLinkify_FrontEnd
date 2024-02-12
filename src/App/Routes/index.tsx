import { RouteObject} from 'react-router-dom'
import AppLayout from '../components/Layouts/AppLayout'
import ErrorBoundry from '../components/RoutesElements/ErrorBoundry'
import NotMatch from '../components/RoutesElements/NotMatch'


// import {ErrorBoundry} from '../common/components/Routes/Fallback'
// import NoMatch from '../common/components/NoMatch'
// import PublicRoutes from './publicRoutes'
// import AdminRoutes from './adminRoutes'
// import AppLayout from 'app/common/components/AppLayout'
const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    errorElement: <ErrorBoundry />,
    children: [
        /// public routes 
        // private routes 
  
      {path: '*', element: <NotMatch />},
    ],
  },
]


export default routes