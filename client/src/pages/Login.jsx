import { useContext, useState } from "react";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ComponentContext } from "../App";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../store/auth";

function Login() {
  const { theme } = useContext(ComponentContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
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
        toast.success(res.data.message);
        const token = res.data.token;
        storeToken(token);
        navigate("/");
      })
      .catch((e) => {
        toast.error(
          e.response.data.extraDeatils
            ? e.response.data.extraDeatils
            : e.response.data.message
        );
      });
    setUser({
      email: "",
      password: "",
    });
  }
  return (
    <section
      style={{
        backgroundColor: `${theme.backgroundColor}`,
        color: `${theme.color}`,
      }}
      className={`w-3/5 mx-auto border rounded my-auto`}
    >
      <div className="py-6 px-4 relative">
        <h1 className="text-3xl">Login Form</h1>
        <form action="#" onSubmit={formSubmit}>
          <Input
            inputType="email"
            placeHolder="Enter Your Email"
            label="Email"
            idLabel="email"
            name="email"
            value={user.email}
            handleInputChange={handleInputChange}
            width="full"
          />
          <Input
            inputType="password"
            placeHolder="Enter Your Password"
            label="Password"
            idLabel="password"
            name="password"
            value={user.password}
            handleInputChange={handleInputChange}
            width="full"
          />
          <div className="input-box">
            <Button type="submit" color={theme.color} text="Login" />
          </div>
        </form>
      </div>
    </section>
  );
}
export { Login };
