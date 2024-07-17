import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../utils/constant';

// Utility function to get a specific cookie
const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};

const AdminAuthGuard = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if the token exists in cookies
        const token = getCookie('token');

        if (token) {
            console.log("token", token);
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }

        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div>Loading...</div>; // Or any other loading indicator
    }

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.ADMIN_LOGIN} replace />;
    }

    return <div>{children}</div>;
};

export default AdminAuthGuard;
