import Login from "./component/common/Login/Login";
import { Route, Routes } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./component/common/Routes/PrivateRoute";
import AllRoutes from "./component/common/Routes/AllRoutes";
import SessionExpire from "./component/common/Routes/SessionExpire";
import UnknownPage from "./component/common/Routes/UnknownPage";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/session-out" element={<SessionExpire />} />

        {/* Protected Routes - Wrapped in PrivateRoute */}
        <Route element={<PrivateRoute />}>
          {/* Catch-all for protected routes */}
          <Route path="/home/*" element={<AllRoutes />} />
        </Route>

        {/* Unknown Page Route */}
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </>
  );
}

export default App;
