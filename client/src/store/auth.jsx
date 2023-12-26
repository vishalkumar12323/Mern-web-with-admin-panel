import { createContext, useContext, useState } from "react";

const authContext = createContext(null);
function useAuth() {
  const authContextValue = useContext(authContext);

  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
}

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("tokens"));
  // function to store token in the local storage.
  function storeToken(token) {
    return localStorage.setItem("tokens", token);
  }

  let isLoggedIn = !!token;
  console.log("token", token);
  console.log("isLoggedIn", isLoggedIn);

  function LogoutUser() {
    setToken("");
    return localStorage.removeItem("tokens");
  }
  return (
    <authContext.Provider value={{ storeToken, isLoggedIn, LogoutUser }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
export { authContext, useAuth };
