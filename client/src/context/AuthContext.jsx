import React, { createContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsLogin(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);

  };

  return (
    <AuthContext.Provider value={{ isLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};