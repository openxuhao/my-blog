export function canAccess(contentLevel, userRole) {
  if (contentLevel === "public") return true;
  if (contentLevel === "login") return userRole === "user" || userRole === "admin";
  if (contentLevel === "admin") return userRole === "admin";
  return false;
}

export function getPermissionLabel(level) {
  switch (level) {
    case "public": return "公开";
    case "login": return "登录可见";
    case "admin": return "管理员私密";
    default: return "公开";
  }
}

export function getPermissionColor(level) {
  switch (level) {
    case "public": return "green";
    case "login": return "orange";
    case "admin": return "red";
    default: return "green";
  }
}
