import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Blog from '../pages/Blog'
import Principal from '../pages/Principal'
import Calculator from '../pages/Calculator'


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
        path: "/blog",
        element: <Blog />
    },
    {
      path: "/principal",
      element: <Principal/>
    },
    {
      path: "/calculadora",
      element: <Calculator/>
    }
  ]);

  const Rota = () => {
    return (
        <RouterProvider router={ router } />
    )
  }

  export default Rota