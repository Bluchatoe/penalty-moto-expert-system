import "./App.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Law from "./Law";
import ExpertSystem from "./ExpertSystem";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Navigate to="expert-system" replace />,
        },
        {
          path: "law",
          element: <Law />,
        },
        {
          path: "expert-system",
          element: <ExpertSystem />,
        },
      ],
    },
  ],
  {
    basename: "/penalty-moto-expert-system/", // must match vite.config.js's `base`
  },
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
