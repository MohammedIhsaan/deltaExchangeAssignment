import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import TeamMember from "./components/TeamMember";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

export default function App() {
  const { accessToken, user } = useSelector((state) => state.authReducer);

  const history = useNavigate();

  useEffect(() => {
    user ? history("/") : history("/login");
    accessToken ? history("/") : history("/login");
  }, [accessToken, user, history]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<TeamMember />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
