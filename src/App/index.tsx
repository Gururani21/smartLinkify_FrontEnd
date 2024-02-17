import React from 'react'
import { useRoutes } from 'react-router'
import routes from './Routes'

const App = () => {
  const content = useRoutes(routes)
  return (
    <>
    {content}
    </>
  )
}

export default App