import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import EmployeeList from "../pages/EmployeeList";
import EmployeeDetails from "../pages/EmployeeDetails";
import PageNotFound from "../pages/PageNotFound";
import MyProfile from "../pages/MyProfile";
import EditProfile from "../pages/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/EmployeeList",
        element: <EmployeeList />,
      },
      {
        path: "/EmployeeList/:id",
        element: <EmployeeDetails />,
      },
      {
        path: "/MyProfile",
        element: <MyProfile />,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

export default router;
