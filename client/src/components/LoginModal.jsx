import { useContext, useState } from "react";
import { ComponentContext } from "../App";
import { Input } from "./Input";
import { Button } from "./Button";

function LoginModal() {
  const { isShowLoginModal, handleCloseModal } = useContext(ComponentContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  }

  function formSubmit(e) {
    e.preventDefault();
    setUser({
      email: "",
      password: "",
    });
    console.log(user);
  }
  return (
    <>
      <section
        className={`fixed bg-white shadow-lg z-20 top-[17%] ml-9 ${
          isShowLoginModal ? "block" : "hidden"
        }  lg:w-1/2 lg:translate-x-1/2 lg:top-[30%] lg:ml-0 md:translate-x-1/2 md:w-1/2 md:ml-0`}
      >
        <div className="py-6 px-4 relative">
          <img
            src="./assets/x-circle.svg"
            alt="delete icon"
            className="absolute right-4 cursor-pointer"
            onClick={() => handleCloseModal("login")}
          />
          <form action="#" onSubmit={formSubmit}>
            <Input
              inputType="email"
              placeHolder="Enter Your Email"
              label="Email"
              idLabel="email"
              name="email"
              value={user.email}
              handleInputChange={handleInputChange}
            />
            <Input
              inputType="password"
              placeHolder="Enter Your Password"
              label="Password"
              idLabel="password"
              name="password"
              value={user.password}
              handleInputChange={handleInputChange}
            />
            <div className="input-box">
              <Button type="submit" color="black" text="Login" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export { LoginModal };
