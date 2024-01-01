import { useAuth } from "../../contexts/AuhtContexts";
import { Outlet, Navigate } from "react-router-dom";
export default function PrivateOutlet() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/" />;
}
