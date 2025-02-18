import React from "react";
import useAuthStore from "../store/userAuthStore";
import { Navigate } from "react-router-dom";
function PublicRoute({children}) {
    const user  = useAuthStore((state)=>state.user);
    return user ? <Navigate to="/profile"/> : children;
}

export default PublicRoute