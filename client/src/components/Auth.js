import { parseCookies, setCookie, destroyCookie } from "nookies";
import { redirect } from "react-router-dom";

// call this to access Token to attach in Authentication Header
export async function getToken() {
  const cookie = parseCookies();
  return cookie.token || null;
}

export async function checkAuth() {
  const token = await getToken();
  if (!token) {
    return redirect("/");
  }
  return null;
}

export function authLogout() {
  destroyCookie(null, "token");
  return redirect("/login");
}

// Call this in Login api to set the token
export function setAuthCookie(token) {
  setCookie(null, "token", token, {
    maxAge: 3600, // Set the expiry time of the cookie (in seconds)
    path: "/", // Set the path for which the cookie is valid
    httpOnly: false, // NOTE set to TRUE during deployment // Set the cookie to be accessible only by the server
    secure: process.env.NODE_ENV === "production", // Set the cookie to be sent only over HTTPS in production environment
    sameSite: "strict", // Set the sameSite attribute to prevent CSRF attacks
  });
}
