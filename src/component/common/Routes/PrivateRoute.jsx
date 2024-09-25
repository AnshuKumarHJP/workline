import { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getCookie } from "../../../assets/Common JS/Commonfn";

export default function PrivateRoute() {
  const token = localStorage.getItem("token");
  const tokenCookie = getCookie("token");

  // Initial state set to null (indicating loading state)
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isSessionOut, setIsSessionOut] = useState(null);
  const location = useLocation(); 

  // console.log("PrivateRoute: token", token);
  // console.log("PrivateRoute: tokenCookie", tokenCookie);

  useEffect(() => {
    const checkAuth = () => {
      if (!token) {
        // No token in localStorage, user is not logged in
        setIsAuthenticated(false);
        toast.warning('You are not logged in! Please login.');
      } else if (!tokenCookie) {
        // Token exists, but session expired (no cookie)
        toast.warning('Session Expired. Please log in again.');
        setIsSessionOut(true);
      } else {
        // Both token and cookie are valid
        setIsSessionOut(false);
        setIsAuthenticated(true);
      }
    };

    checkAuth();
  }, [token, tokenCookie]);

  // Redirect to session out page if the session is expired
  if (isSessionOut) {
    // console.log("PrivateRoute: Session expired");
    return <Navigate to="/session-out" />;
  }

  // If the authentication state is still null, show a loading spinner (or null)
  if (isAuthenticated === null) {
    // console.log("PrivateRoute: Authentication check is in progress");
    return <div>Loading...</div>; // Replace with a spinner or skeleton UI if needed
  }

  // If not authenticated, redirect to the login page
  if (isAuthenticated === false) {
    // console.log("PrivateRoute: Not authenticated");
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // If authenticated, render the child routes
  // console.log("PrivateRoute: Authenticated, rendering child routes");
  return <Outlet />;
}
