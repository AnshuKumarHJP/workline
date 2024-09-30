
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './assets/Css/common.css'
import './assets/Css/ProfileView.css'
import "react-alice-carousel/lib/alice-carousel.css";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./component/common/Routes/PrivateRoute";
import SessionExpire from "./component/common/Routes/SessionExpire";
import UnknownPage from "./component/common/Routes/UnknownPage";
import MainLayout from "./component/common/MainLayout";
import HomeDashBoard from "./pages/Home/HomeDashBoard";
import Login from "./component/common/Login/Login";
import Locator from "./component/common/Locator/Locator";
import ModuleDashBoard from "./pages/ModuleDashBoard/ModuleDashBoard";
import Sec_Modules from "./pages/WL Restrict/Sec_Modules";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/session-out",
    element: <SessionExpire />,
  },
  {
    path: "*",
    element: <UnknownPage />, // Catch-all for undefined routes
  },
  {
    element: <PrivateRoute />, // Wrapping the protected routes
    children: [
      {
        path: "/", // Base path for protected routes
        element: <MainLayout />, // Main layout component
        children: [
          {
            index: true, // This means it matches the base path ("/home")
            element: <HomeDashBoard />,
          },
          {
            path: "Emp/Locator", // Define dynamic path without query params
            element: <Locator />,
          },
          {
            path: "WFM", // Define dynamic path without query params
            element: <ModuleDashBoard />,
          },
          {
            path: "ECS", // Define dynamic path without query params
            element: <ModuleDashBoard />,
          },
          {
            path: "TA", // Define dynamic path without query params
            element: <ModuleDashBoard />,
          },
          {
            path: "Config", // Define dynamic path without query params
            element: <ModuleDashBoard />,
          },
          {
            path: "Sec_Modules", // Define dynamic path without query params
            element: <Sec_Modules />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/session-out" element={<SessionExpire />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home/*" element={<AllRoutes />} />
        </Route>

        <Route path="*" element={<UnknownPage />} />
      </Routes> */}
    </>
  );
}

export default App;
