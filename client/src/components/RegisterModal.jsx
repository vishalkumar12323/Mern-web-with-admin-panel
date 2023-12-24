import { useContext, useState } from "react";
import { ComponentContext } from "../App";
import { Input } from "./Input";
import { Button } from "./Button";

function RegisterModal() {
  const { isShowRegisterModal, handleCloseModal } =
    useContext(ComponentContext);
  const userDetails = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  };
  const [user, setUser] = useState(userDetails);

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
    setUser(userDetails);
    console.log(user);
  }
  return (
    <>
      <section
        className={`bg-[#fff] bottom-24 w-[90%] ml-6 shadow-xl fixed z-20 ${
          isShowRegisterModal ? "block" : "hidden"
        } lg:translate-x-1/2 lg:w-1/2 lg:bottom-5 md:ml-10 md:bottom-20 `}
      >
        <div className="py-4 px-3 relative" id="main-box">
          <img
            src="./assets/x-circle.svg"
            alt="delete icon"
            className="close-icon absolute right-6 top-5 cursor-pointer"
            onClick={() => handleCloseModal("signup")}
          />
          <form action="#" onSubmit={formSubmit}>
            <Input
              inputType="text"
              placeHolder="Enter Your Frist Name"
              label="Frist Name"
              idLabel="fName"
              name="fName"
              handleInputChange={handleInputChange}
              value={user.fName}
            />
            <Input
              inputType="text"
              placeHolder="Enter Your Last Name"
              label="Last Name"
              idLabel="lName"
              name="lName"
              handleInputChange={handleInputChange}
              value={user.lName}
            />
            <Input
              inputType="email"
              placeHolder="Enter Your Email"
              label="Email"
              idLabel="email"
              name="email"
              handleInputChange={handleInputChange}
              value={user.email}
            />
            <Input
              inputType="password"
              placeHolder="Enter Your Password"
              label="Password"
              idLabel="password"
              name="password"
              handleInputChange={handleInputChange}
              value={user.password}
            />
            <Input
              inputType="password"
              placeHolder="Enter Your Password"
              label="Confirm Password"
              idLabel="confirmPassword"
              name="confirmPassword"
              handleInputChange={handleInputChange}
              value={user.confirmPassword}
            />
            <Input
              inputType="text"
              placeHolder="Enter Your Phone Number"
              label="Phone Number"
              idLabel="phone"
              name="phone"
              handleInputChange={handleInputChange}
              value={user.phone}
            />
            <div className="input-box">
              <Button text="Sign up" type="submit" color="black" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export { RegisterModal };
