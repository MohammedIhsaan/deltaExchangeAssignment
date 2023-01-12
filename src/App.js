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
    user
      ? history("/deltaExchangeAssignment")
      : history("/deltaExchangeAssignment/login");
    accessToken
      ? history("/deltaExchangeAssignment")
      : history("/deltaExchangeAssignment/login");
  }, [user, accessToken]);

  return (
    <div>
      <Routes>
        <Route path='/deltaExchangeAssignment' element={<TeamMember />} />
        <Route path='/deltaExchangeAssignment/login' element={<Login />} />
        <Route path='/deltaExchangeAssignment/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}
