import { useState, useEffect, useCallback } from "react";
import { getCurrentUser, loginAsAdmin, logout as authLogout } from "../auth/token";
import { checkLoginAttempts, recordFailedLogin, clearLoginAttempts } from "../auth/login.config";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((u) => {
      setUser(u);
      setIsLoading(false);
    });
  }, []);

  const login = useCallback(async (key) => {
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
  }, []);

  const logout = useCallback(() => {
    authLogout();
    setUser(null);
  }, []);

  const isAdmin = user?.role === "admin";
  const isLoggedIn = user?.role === "user" || user?.role === "admin";

  return {
    user,
    isLoading,
    isAdmin,
    isLoggedIn,
    login,
    logout,
  };
}
