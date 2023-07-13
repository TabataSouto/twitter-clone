import { createBrowserRouter } from "react-router-dom";
import Timeline from "../pages/Timeline";
import Status from "../pages/Status";
import Default from "../layouts/Default";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Timeline />,
  // },
  // {
  //   path: "/status",
  //   element: <Status />
  // },
  {
    path: "/",
    element: <Default />,
    children: [
      {
          path: "/",
          element: <Timeline />,
        },
        {
          path: "/status",
          element: <Status />
        },
    ]
  },
]);

export default router;
