import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Error } from "./pages/Error";

const ComponentContext = createContext(null);
function App() {
  const [theme, setTheme] = useState({
    backgroundColor: "#fff",
    color: "#000",
  });
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [isShowRegisterModal, setIsShowRegisterModal] = useState(false);

  const handleShowLoginModal = () => setIsShowLoginModal(true);
  const handleShowSignupModal = () => setIsShowRegisterModal(true);

  function handleShowThemeMenu() {
    setShowThemeMenu((previousState) => {
      return !previousState;
    });
  }

  function handleCloseModal(modalType) {
    if (modalType === "signup") {
      setIsShowRegisterModal(false);
    } else if (modalType === "login") {
      setIsShowLoginModal(false);
    }
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
      >
        <ComponentContext.Provider
          value={{
            isShowLoginModal,
            isShowRegisterModal,
            theme,
            showThemeMenu,
            handleShowLoginModal,
            handleShowSignupModal,
            handleCloseModal,
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
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </ComponentContext.Provider>
      </div>
    </>
  );
}

export { App, ComponentContext };
