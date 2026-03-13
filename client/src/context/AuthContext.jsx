import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking local storage for a mock user session
    const storedUser = localStorage.getItem('orchestyle_mock_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock login logic
    const mockUser = { id: 1, name: 'Jane Doe', email };
    setUser(mockUser);
    localStorage.setItem('orchestyle_mock_user', JSON.stringify(mockUser));
  };

  const register = (name, email, password) => {
    // Mock register logic
    const mockUser = { id: Date.now(), name, email };
    setUser(mockUser);
    localStorage.setItem('orchestyle_mock_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('orchestyle_mock_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
