import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import TeamMember from "./components/TeamMember";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

export default function App() {
  const { accessToken, loading } = useSelector((state) => state.authReducer);
  const history = useNavigate();
  const [path, setpath] = useState("/login");

  useEffect(() => {
    if (!loading && !accessToken) {
      history(path);
    }
  }, [accessToken, loading, history, path]);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login setpath={setpath} />} />
        <Route path="/signup" element={<Signup setpath={setpath} />} />
        <Route path="/" element={<TeamMember />} />
      </Routes>
    </div>
  );
}
