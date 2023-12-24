import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ComponentContext } from "../App";
import { Button } from "./Button";
function Navbar() {
  const { handleShowLoginModal, handleShowSignupModal } =
    useContext(ComponentContext);
  const [isActive, setIsActive] = useState(false);

  function handleSideShowMenu() {
    setIsActive((previousState) => {
      return !previousState;
    });
  }
  return (
    <>
      <header className=" h-16 w-full flex justify-between items-center relative shadow-md ">
        <div className="absolute left-5">
          <h1 className=" text-[1.7rem]">Mern Dev</h1>
        </div>
        <nav
          id="menuToggle"
          className={`z-10 absolute top-[4.1rem] right-0 w-1/2 flex justify-center h-[75vh] transition-all bg-slate-100 ${
            isActive ? "translate-x-0" : "translate-x-full"
          } lg:top-0 lg:right-6 lg:w-[45%] lg:h-full lg:justify-end lg:items-center lg:translate-x-0 lg:bg-white`}
        >
          <ul
            id="menu"
            className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-6 mt-8 lg:mt-0 text-2xl lg:text-xl"
          >
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about">
              <li>About</li>
            </NavLink>
            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
            <NavLink to="/services">
              <li>Services</li>
            </NavLink>
            <Button
              text="Sign up"
              type="button"
              showPage={handleShowSignupModal}
            />
            <Button
              text="Login"
              type="button"
              showPage={handleShowLoginModal}
            />
          </ul>
        </nav>
        <div
          id="humburger-menu-bar"
          className="absolute right-4 top-0 lg:hidden"
        >
          <label htmlFor="hamburger">
            <input type="checkbox" id="hamburger" />
            <div className="container" onClick={handleSideShowMenu}>
              <div className="menu"></div>
            </div>
          </label>
        </div>
      </header>
    </>
  );
}

export { Navbar };
