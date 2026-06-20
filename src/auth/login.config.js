export const LOGIN_CONFIG = {
  maxRetries: 5,
  lockoutDuration: 10 * 60 * 1000,
  siteName: "SecNest's Blog",
};

export const RETRY_KEY = "login_retries";
export const LOCKOUT_KEY = "login_lockout";

export function checkLoginAttempts() {
  const lockout = localStorage.getItem(LOCKOUT_KEY);
  if (lockout) {
    const lockoutTime = parseInt(lockout);
    const now = Date.now();
    if (now < lockoutTime) {
      return { allowed: false, remainingTime: Math.ceil((lockoutTime - now) / 1000) };
    }
    localStorage.removeItem(LOCKOUT_KEY);
    localStorage.removeItem(RETRY_KEY);
  }
  return { allowed: true, remainingTime: 0 };
}

export function recordFailedLogin() {
  const retries = parseInt(localStorage.getItem(RETRY_KEY) || "0") + 1;
  localStorage.setItem(RETRY_KEY, retries.toString());

  if (retries >= LOGIN_CONFIG.maxRetries) {
    const lockoutTime = Date.now() + LOGIN_CONFIG.lockoutDuration;
    localStorage.setItem(LOCKOUT_KEY, lockoutTime.toString());
  }

  return LOGIN_CONFIG.maxRetries - retries;
}

export function clearLoginAttempts() {
  localStorage.removeItem(RETRY_KEY);
  localStorage.removeItem(LOCKOUT_KEY);
}
