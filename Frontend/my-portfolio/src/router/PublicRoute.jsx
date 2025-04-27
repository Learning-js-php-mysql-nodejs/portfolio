
import {  useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";


const PublicRoute = ({ element }) => {
  const navigate = useNavigate();

  let isAuthenticated = ""

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }

  }, [navigate, isAuthenticated])

  return !isAuthenticated ? element : <Navigate to="/" />;
};

export default PublicRoute
