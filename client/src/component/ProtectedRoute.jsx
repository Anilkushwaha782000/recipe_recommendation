import { Navigate } from "react-router-dom";
import useAuthStore from "../store/userAuthStore";
import React from "react";
const ProtectedRoute = ({ children }) => {
    const  user  = useAuthStore((state)=>state.user);
    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
