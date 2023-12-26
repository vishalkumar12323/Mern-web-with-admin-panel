import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Logout } from "./pages/Logout";
const ComponentContext = createContext(null);
function App() {
  const [showThemeMenuDropdown, setShowThemeMenuDropdown] = useState(false);
  const [theme, setTheme] = useState({
    backgroundColor: "#fff",
    color: "#000",
  });

  function handleShowThemeMenu() {
    setShowThemeMenuDropdown((previousState) => {
      return !previousState;
    });
  }

  const handleThemeChange = (themeType) => {
    if (themeType === "light")
      setTheme({ backgroundColor: "#fff", color: "#000" });
    else if (themeType === "dark")
      setTheme({ backgroundColor: "#040b13", color: "#fff" });

    handleShowThemeMenu();
  };

  return (
    <>
      <div
        style={{
          backgroundColor: `${theme.backgroundColor}`,
          color: `${theme.color}`,
        }}
        className="body max-w-screen-2xl mx-auto"
      >
        <ComponentContext.Provider
          value={{
            theme,
            showThemeMenuDropdown,
            handleThemeChange,
            handleShowThemeMenu,
          }}
        >
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ComponentContext.Provider>
      </div>
    </>
  );
}

export { App, ComponentContext };
