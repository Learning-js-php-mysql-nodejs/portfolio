import React, { useEffect } from 'react';
import { routeConfigs } from "./RouteList";
import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { NotFound } from "../pages";


export default function Router() {

  const createRoutes = (configs) => {
    return configs.map(config => ({
      element: <config.layout />,
      errorElement: <NotFound />,
      children: config.children.map(child => ({
        path: child.path,
        element: child.isPrivate
          ? <PrivateRoute element={<child.element />} />
          : <PublicRoute element={<child.element />} />,
        errorElement: <NotFound />,
      })),
    }));
  };

  const routes = createRoutes(routeConfigs);
  const router = createBrowserRouter(routes);

return (
  <div className='w-full'>
    <Suspense fallback={<div>Loadding...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </div>
);
}
