const SECRET_KEY = import.meta.env.VITE_JWT_SECRET || "secnest-blog-jwt-secret-key-2024";

export function createToken(payload) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const now = Math.floor(Date.now() / 1000);
  const tokenPayload = btoa(JSON.stringify({ ...payload, iat: now, exp: now + 604800 }));
  const message = `${header}.${tokenPayload}`;
  
  const encoder = new TextEncoder();
  return crypto.subtle
    .sign("HMAC", encoder.encode(SECRET_KEY), encoder.encode(message))
    .then((signature) => {
      const sig = btoa(String.fromCharCode(...new Uint8Array(signature)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
      return `${message}.${sig}`;
    });
}

export function verifyToken(token) {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    
    const payload = JSON.parse(atob(parts[1].replace(/-/g, "+").replace(/_/g, "/")));
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

export function getStoredToken() {
  return localStorage.getItem("auth_token");
}

export function setStoredToken(token) {
  localStorage.setItem("auth_token", token);
}

export function removeStoredToken() {
  localStorage.removeItem("auth_token");
}

export async function getCurrentUser() {
  const token = getStoredToken();
  if (!token) return null;
  return verifyToken(token);
}

export async function loginAsAdmin(adminKey) {
  const validKey = import.meta.env.VITE_ADMIN_KEY || "secnest-admin-2024";
  if (adminKey !== validKey) return false;
  
  const token = await createToken({ role: "admin", username: "admin", loginTime: Date.now() });
  setStoredToken(token);
  return true;
}

export function logout() {
  removeStoredToken();
}
