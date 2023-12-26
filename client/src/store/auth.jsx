import { createContext, useContext } from "react";

const authContext = createContext(null);
function useAuth() {
  const authContextValue = useContext(authContext);

  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
}

function AuthProvider({ children }) {
  // function to store token in the local storage.
  function storeToken(token) {
    return localStorage.setItem("tokens", token);
  }

  return (
    <authContext.Provider value={{ storeToken }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
export { authContext, useAuth };
