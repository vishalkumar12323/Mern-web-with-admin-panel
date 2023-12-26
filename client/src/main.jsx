import ReactDOM from "react-dom/client";
import { App } from "./App";
import AuthProvider from "./store/auth.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
