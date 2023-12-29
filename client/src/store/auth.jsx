import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

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
  const [fetchedUser, setFetchedUser] = useState();
  let isLoggedIn = !!token;
  // function to store token in the local storage.
  function storeToken(token) {
    setToken(token);
    return localStorage.setItem("tokens", token);
  }

  

  // function to fetch current user data from database;
  async function fetchUser() {
    try {
      axios
        .get("http://localhost:3000/api/auth/user", {
          headers: {
            Authorization: token,
          },
        })
        .then((user) => {
          setFetchedUser(user.data);
        })
        .catch((e) => {
          console.log("fetching user details error", e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  function LogoutUser() {
    setToken("");
    return localStorage.removeItem("tokens");
  }
  return (
    <authContext.Provider
      value={{ storeToken, isLoggedIn, LogoutUser, fetchedUser }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;
export { authContext, useAuth };
