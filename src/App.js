import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeamMember from "./components/TeamMember";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="addMember" element={<TeamMember />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
