import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('gearup-token');
    if (token) {
      // Verify token with backend
      authAPI.getCurrentUser()
        .then(response => {
          setUser(response.user);
        })
        .catch(error => {
          console.error('Token verification failed:', error);
          localStorage.removeItem('gearup-token');
          localStorage.removeItem('gearup-user');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authAPI.login(email, password);
      
      setUser(response.user);
      localStorage.setItem('gearup-token', response.token);
      localStorage.setItem('gearup-user', JSON.stringify(response.user));
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      
      setUser(response.user);
      localStorage.setItem('gearup-token', response.token);
      localStorage.setItem('gearup-user', JSON.stringify(response.user));
      
      return { success: true };
    } catch (error) {
      console.error('Signup error:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gearup-token');
    localStorage.removeItem('gearup-user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      signup,
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