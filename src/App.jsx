import Login from "./component/common/Login/Login";
import { Route, Routes } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./component/common/Routes/PrivateRoute";
import AllRoutes from "./component/common/Routes/AllRoutes";


function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route
            path="/*"
            element={<AllRoutes />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
