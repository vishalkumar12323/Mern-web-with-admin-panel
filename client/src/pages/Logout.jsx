import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function Logout() {
  const { LogoutUser } = useAuth();
  toast.success("Logout successfully")

  useEffect(() => {
    LogoutUser();
  }, [LogoutUser]);
  return <Navigate to="/login" />;
}

export { Logout };
