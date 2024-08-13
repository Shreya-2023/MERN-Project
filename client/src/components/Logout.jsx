import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Logout = () => {
    const navigate = useNavigate(); // Initialize navigate function

    useEffect(() => {
        // Clear the isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', false);
        navigate('/login'); // Redirect to the login page after logging out
    }, [navigate]);

    return null; // This component doesn't render anything, so return null
};

export default Logout;



