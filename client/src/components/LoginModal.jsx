import { useContext, useState } from "react";
import axios from "axios";
import { ComponentContext } from "../App";
import { Input } from "./Input";
import { Button } from "./Button";
import { CloseButton } from "./CloseButton";
import { useAuth } from "../store/auth";

function LoginModal() {
  const { isShowLoginModal, handleShowSignupModal, handleCloseModal, theme } =
    useContext(ComponentContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { storeToken } = useAuth();

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

    axios
      .post("http://localhost:3000/api/auth/login", user, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        const token = res.data.token;
        storeToken(token);
      })
      .catch((e) => {
        console.log("error " + e);
      });
    setUser({
      email: "",
      password: "",
    });
  }
  return (
    <>
      <section
        style={{
          backgroundColor: `${theme.backgroundColor}`,
          colro: `${theme.color}`,
        }}
        className={`fixed shadow-lg z-20 top-[17%] ${
          isShowLoginModal ? "block" : "hidden"
        }  lg:w-1/2 lg:top-[30%] lg:ml-0 md:w-1/2`}
      >
        <div className="py-6 px-4 relative">
          <CloseButton
            buttonStyle="absolute right-4"
            handleCloseModal={handleCloseModal}
            modalType="login"
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
              <Button type="submit" color={theme.color} text="Login" />
            </div>
          </form>
          <div
            className="absolute right-5 bottom-7"
            onClick={(e) => {
              e.stopPropagation();
              handleShowSignupModal();
              handleCloseModal("login");
            }}
          >
            <p className="text-xs">
              Not Account Yet.
              <span className="hover:text-blue-500 hover:underline cursor-pointer">
                Please Click Here
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export { LoginModal };
