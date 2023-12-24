import { useContext } from "react";
import { ComponentContext } from "../App";
function Footer() {
  const { theme } = useContext(ComponentContext);
  return (
    <>
      <footer
        style={{
          backgroundColor: `${theme.backgroundColor}`,
          color: `${theme.color}`,
        }}
        className="footer py-4 text-center shadow-md border"
      >
        <h1>Copyright &copy; Mern Web {new Date().getFullYear()} </h1>
      </footer>
    </>
  );
}

export { Footer };
