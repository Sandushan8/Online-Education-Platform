import { Routes, Route, Navigate } from "react-router-dom";
import { LoginContainer } from "../app/login/LoginContainer";
import { ProtectedRoutes } from "./ProtectedRouts";
import { useSelector } from "react-redux";
import { RegisterContainer } from "../app/register/RegisterContainer";

export const AppRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);
  if (isAuth) {
    return <ProtectedRoutes />;
  }
  return (
    <Routes>
      <Route path="/login" element={<LoginContainer />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="*" element={<Navigate to={"/login"} replace />} />
    </Routes>
  );
};
