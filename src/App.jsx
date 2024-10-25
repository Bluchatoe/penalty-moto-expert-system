import "./App.css";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Law from "./Law";
import ExpertSystem from "./ExpertSystem";

const router = createBrowserRouter([
  {
    path: "/penalty-moto",
    element: <Root />,
    children: [
      {
        path: "/penalty-moto",
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
