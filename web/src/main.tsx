import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./common.css";
import "./animation.css";

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

// view
import Index from "./views/Index/index";
import Qualify from "./views/Qualify/index";
import Fight from "./views/Fight/index";
import Rank from "./views/Rank/index";

const router = createHashRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/qualify",
    element: <Qualify />,
  },
  {
    path: "/fight",
    element: <Fight />,
  },
  {
    path: "/rank",
    element: <Rank />,
  }
]);

ReactDOM.createRoot(document.getElementById("container")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
