import React, { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    auth: Boolean(user),
  };
};

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  console.log("auth", auth);
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
