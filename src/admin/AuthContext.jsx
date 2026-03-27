import { createContext, useContext, useState, useEffect } from "react";
import api from "./api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("anjani_token");
    if (!token) { setLoading(false); return; }
    api.getMe()
      .then((res) => { if (res.admin) setAdmin(res.admin); else localStorage.removeItem("anjani_token"); })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await api.login(email, password);
    if (res.token) {
      localStorage.setItem("anjani_token", res.token);
      setAdmin(res.admin);
      return { success: true };
    }
    return { success: false, message: res.message };
  };

  const logout = async () => {
    await api.logout().catch(() => {});
    localStorage.removeItem("anjani_token");
    setAdmin(null);
  };

  return (
    <AuthContext.Provider value={{ admin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
