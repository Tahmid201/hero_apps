import React from 'react';
import { createBrowserRouter } from "react-router-dom"; 
import Root from '../components/Root/Root';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';
import Home from '../Pages/Home/Home';
import AllApps from '../Pages/AllApps/AllApps';
import AppDetails from '../Pages/AppDetails/AppDetails';
import InstallationPage from '../Pages/InstalledPage/InstalledPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPages />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/apps",
        element: <AllApps />
      },
      {
        path: "/app/:id",
        element: <AppDetails />
      },
      {
        path:"/installs",
        element: <InstallationPage />
      },
      {
        path: "*",
        element: <ErrorPages />
      }
    ]
  },
]);
