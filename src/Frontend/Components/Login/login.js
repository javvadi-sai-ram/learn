// components/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }) => {
    const Navigate = useNavigate();

    const handleLogin = () => {
        // Simulate authentication
        setIsAuthenticated(true);
        // Redirect to the dashboard after login
        Navigate('/Ram/home');
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;
