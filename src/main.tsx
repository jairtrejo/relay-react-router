import { RelayEnvironmentProvider} from "react-relay";
import { RelayEnvironment } from "./RelayEnvironment";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RouteOne from "./RouteOne";
import RouteTwo from "./RouteTwo";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/one",
        element: <RouteOne />,
        loader: () => {
          console.log("Loading route one");
          return true;
        },
      },
      {
        path: "/two",
        element: <RouteTwo />,
        loader: () => {
          console.log("Loading route two");
          return true;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RelayEnvironmentProvider>,
);
