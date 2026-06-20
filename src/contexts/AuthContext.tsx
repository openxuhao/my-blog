import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { getCurrentUser, loginAsAdmin, logout as authLogout, type UserPayload } from "../auth/token";
import { checkLoginAttempts, recordFailedLogin, clearLoginAttempts } from "../auth/login.config";

interface AuthContextType {
  user: UserPayload | null;
  isLoading: boolean;
  isAdmin: boolean;
  isLoggedIn: boolean;
  login: (key: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserPayload | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((u) => {
      setUser(u);
      setIsLoading(false);
    });
  }, []);

  const login = async (key: string): Promise<{ success: boolean; error?: string }> => {
    const { allowed, remainingTime } = checkLoginAttempts();
    if (!allowed) {
      return { success: false, error: `登录尝试过多，请 ${Math.ceil(remainingTime / 60)} 分钟后重试` };
    }

    const adminSuccess = await loginAsAdmin(key);
    if (adminSuccess) {
      clearLoginAttempts();
      const u = await getCurrentUser();
      setUser(u);
      return { success: true };
    }

    const remaining = recordFailedLogin();
    return { success: false, error: `密钥错误，还剩 ${remaining} 次尝试机会` };
  };

  const logout = () => {
    authLogout();
    setUser(null);
  };

  const isAdmin = user?.role === "admin";
  const isLoggedIn = user?.role === "user" || user?.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAdmin,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
