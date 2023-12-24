import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Error } from "./pages/Error";

const ComponentContext = createContext(null);
function App() {
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);
  const [isShowRegisterModal, setIsShowRegisterModal] = useState(false);

  const handleShowLoginModal = () => setIsShowLoginModal(true);
  const handleShowSignupModal = () => setIsShowRegisterModal(true);

  function handleCloseModal(modalType) {
    if (modalType === "signup") {
      setIsShowRegisterModal(false);
    } else if (modalType === "login") {
      setIsShowLoginModal(false);
    }
  }

  return (
    <>
      <ComponentContext.Provider
        value={{
          isShowLoginModal,
          isShowRegisterModal,
          handleShowLoginModal,
          handleShowSignupModal,
          handleCloseModal,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ComponentContext.Provider>
    </>
  );
}

export { App, ComponentContext };
