import { Input } from "../components/Input";
import axios from "axios";
import { ComponentContext } from "../App";
import { useContext, useState } from "react";
import { Button } from "../components/Button";

function Contact() {
  const { theme } = useContext(ComponentContext);
  const [message, setMessage] = useState({
    username: "",
    email: "",
    message: "",
  });

  function handleContactForm(event) {
    const { name, value } = event.target;
    setMessage((previousMessage) => {
      return {
        ...previousMessage,
        [name]: value,
      };
    });
  }

  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/contact",
        message,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(data);
      setMessage({
        username: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log("e " + err);
    }
  }
  return (
    <>
      <div
        className="lg:w-3/4 py-4 px-4 mx-auto m-4 rounded border"
        style={{
          backgroundColor: `${theme.backgroundColor}`,
          color: `${theme.color}`,
        }}
      >
        <div className="">
          <h2 className="md:text-3xl">Get In To Touch</h2>
        </div>
        <div className="py-2">
          <form onSubmit={handleSubmitForm}>
            <div className="flex gap-6 justify-between w-full">
              <div className="w-1/2">
                <Input
                  inputType="text"
                  placeHolder="username"
                  label="Username"
                  idLabel="username"
                  name="username"
                  handleInputChange={handleContactForm}
                  value={message.username}
                />
              </div>
              <div className="w-1/2">
                <Input
                  inputType="email"
                  placeHolder="email"
                  label="Email"
                  idLabel="email"
                  name="email"
                  handleInputChange={handleContactForm}
                  value={message.email}
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                onChange={handleContactForm}
                value={message.message}
                id="message"
                rows="8"
                placeholder="write message"
                className="w-full outline-none px-2 text-black border rounded focus:shadow"
              ></textarea>
            </div>
            <div>
              <Button type="submit" text="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export { Contact };
