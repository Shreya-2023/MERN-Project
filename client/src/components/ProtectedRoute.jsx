import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";


const ProtectedRoute = () => {
    
    const isloggedIn = localStorage.getItem('isLoggedIn')

    return (
        isloggedIn ? <Outlet /> : <Navigate to={'/login'}/>
    )
}
export default ProtectedRoute