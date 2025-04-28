import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserByIdAPI } from '../services/UserAPI';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const nguoiDung = JSON.parse(sessionStorage.getItem('nguoidung'));
        
        if (token && nguoiDung) {
            setUser(nguoiDung);
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('token', token);
        sessionStorage.setItem('nguoidung', JSON.stringify(userData));
        setUser(userData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('nguoidung');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            isAuthenticated, 
            login, 
            logout 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};