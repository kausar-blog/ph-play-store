import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout.jsx";
import Apps from "./pages/apps/Apps.jsx";
import InstallApps from "./pages/InstallApps/InstallApps.jsx";
import NotFoundPage from "./pages/NOtFoundPage/NotFoundPage.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path: '/',
        index: true,
        element: <Homepage />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installedApps",
        element: <InstallApps />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
