
import {  useEffect } from "react";

import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({ element }) => {
    const navigate = useNavigate();
  

    let isAuthenticated ="dfdsfdfdfdg"
  
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
       
    }, [navigate, isAuthenticated])

    return isAuthenticated
        ? element
        : <Navigate to="/" />;
}

export default PrivateRoute