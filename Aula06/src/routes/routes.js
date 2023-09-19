import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from '../App'
import Principal from '../components/Principal'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Principal />,
    },
    {
        path: "/app",
        element: <App />
    }
  ]);

  const Rota = () => {
    return (
        <RouterProvider router={ router } />
    )
  }

  export default Rota