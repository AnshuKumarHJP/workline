import Login from "./component/common/Login/Login";
import EmpRoute from "./component/common/Routes/EmpRoute";
import { Route, Routes } from "react-router-dom";
import "react-alice-carousel/lib/alice-carousel.css";
import PrivateRoute from "./component/common/Routes/PrivateRoute";
import CryptoJS from "crypto-js";
import AdminRoute from "./component/common/Routes/AdminRoute";


function App() {
  const encryptedData = localStorage.getItem("userData");

  let userData = null;
  if (encryptedData) {
    // Decrypt the encrypted data from localStorage
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, "secret-key");
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      // Parse the decrypted JSON string back into a JavaScript object
      userData = JSON.parse(decryptedData);
    } catch (error) {
      console.error("Error decrypting userData:", error);
    }
  }

  console.log("userData", userData);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route
            path="/*"
            element={userData?.role === "Emp" ? <EmpRoute /> : <AdminRoute />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
