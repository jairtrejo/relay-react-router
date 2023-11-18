import { RelayEnvironmentProvider } from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RouteOne, { loader as routeOneLoader } from "./RouteOne";
import RouteTwo from "./RouteTwo";
import React, { Suspense } from "react";

const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          path: "/one",
          element: <RouteOne />,
          loader: routeOneLoader,
        },
        {
          path: "/two",
          element: <RouteTwo />,
        },
      ],
    },
  ],
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <Suspense fallback={"Loading..."}>
        <RouterProvider router={router} future={{v7_startTransition: true}} />
      </Suspense>
    </React.StrictMode>
  </RelayEnvironmentProvider>,
);
