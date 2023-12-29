import { useContext, useState } from "react";
import axios from "axios";
import { ComponentContext } from "../App";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { toast } from "react-toastify";

function Signup() {
  const { theme } = useContext(ComponentContext);
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
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((e) => {
        toast.error(
          e.response.data.extraDeatils
            ? e.response.data.extraDeatils
            : e.data.message
        );
      });

    setUser(userDetails);
  }
  return (
    <section
      style={{
        backgroundColor: `${theme.backgroundColor}`,
        color: `${theme.color}`,
      }}
      className="w-3/4 mx-auto border m-4 rounded"
    >
      <div className="py-4 px-3 relative w-full" id="main-box">
        <h1 className="text-3xl">Signup Form</h1>
        <form action="#" onSubmit={formSubmit}>
          <div className="flex gap-4 w-full">
            <Input
              inputType="text"
              placeHolder="Enter Your Frist Name"
              label="Frist Name"
              idLabel="fName"
              name="fName"
              handleInputChange={handleInputChange}
              value={user.fName}
              width="1/2"
            />
            <Input
              inputType="text"
              placeHolder="Enter Your Last Name"
              label="Last Name"
              idLabel="lName"
              name="lName"
              handleInputChange={handleInputChange}
              value={user.lName}
              width="1/2"
            />
          </div>
          <Input
            inputType="email"
            placeHolder="Enter Your Email"
            label="Email"
            idLabel="emaill"
            name="email"
            handleInputChange={handleInputChange}
            value={user.email}
            width="full"
          />
          <Input
            inputType="password"
            placeHolder="Enter Your Password"
            label="Password"
            idLabel="passwordd"
            name="password"
            handleInputChange={handleInputChange}
            value={user.password}
            width="full"
          />
          <Input
            inputType="password"
            placeHolder="Enter Your Password"
            label="Confirm Password"
            idLabel="confirmPassword"
            name="confirmPassword"
            handleInputChange={handleInputChange}
            value={user.confirmPassword}
            width="full"
          />
          <Input
            inputType="text"
            placeHolder="Enter Your Phone Number"
            label="Phone Number"
            idLabel="phone"
            name="phone"
            handleInputChange={handleInputChange}
            value={user.phone}
            width="full"
          />
          <div className="input-box">
            <Button text="Sign up" type="submit" color={theme.color} />
          </div>
        </form>
      </div>
    </section>
  );
}

export { Signup };
