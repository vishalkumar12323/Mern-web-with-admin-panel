import { useContext, useState } from "react";
import axios from "axios";
import { ComponentContext } from "../App";
import { Input } from "./Input";
import { Button } from "./Button";
import { CloseButton } from "./CloseButton";

function RegisterModal() {
  const { isShowRegisterModal, handleCloseModal, theme } =
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
    axios
      .post("http://localhost:3000/api/auth/signup", user, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("err " + e);
      });
    setUser(userDetails);
  }
  return (
    <>
      <section
        style={{
          backgroundColor: `${theme.backgroundColor}`,
          color: `${theme.color}`,
        }}
        className={`w-[90%] shadow-xl fixed z-20 top-[10%] ${
          isShowRegisterModal ? "block" : "hidden"
        }  lg:w-1/2 lg:top-[12%]`}
      >
        <div className="py-4 px-3 relative" id="main-box">
          <CloseButton
            buttonStyle="absolute right-6 top-5"
            handleCloseModal={handleCloseModal}
            modalType="signup"
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
              idLabel="emaill"
              name="email"
              handleInputChange={handleInputChange}
              value={user.email}
            />
            <Input
              inputType="password"
              placeHolder="Enter Your Password"
              label="Password"
              idLabel="passwordd"
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
              <Button text="Sign up" type="submit" color={theme.color} />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export { RegisterModal };
