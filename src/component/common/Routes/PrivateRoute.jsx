import { Outlet, Navigate } from "react-router-dom";
import CryptoJS from 'crypto-js';

export default function PrivateRoute() {
  const encryptedData = localStorage.getItem("userData");

  let userData = null;
  if (encryptedData) {
    // Decrypt the encrypted data from localStorage
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, 'secret-key');
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      // Parse the decrypted JSON string back into a JavaScript object
      userData = JSON.parse(decryptedData);
    } catch (error) {
      console.error("Error decrypting userData:", error);
    }
  }

  // If userData is null or invalid, redirect to login page
  if (!userData) {
    return <Navigate to="/login" />;
  }

  // If userData is valid, render the child routes (i.e., Outlet or children prop)
  return <Outlet />;
}
