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
        className="footer py-4 text-center shadow-md border-t"
      >
        <div className="py-4 ">
          <ul className="flex gap-3 justify-center items-center mb-2">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
          <hr className="w-2/3 mx-auto py-2" />
          <p className="text-center text-body-secondary">
            © {new Date().getFullYear()} Company, Inc
          </p>
        </div>
      </footer>
    </>
  );
}

export { Footer };
