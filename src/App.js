import React from "react";
import TeamMember from "./components/TeamMember";
import Login from "./pages/login/Login";
import Singup from "./pages/signup/Singup";

export default function App() {
  return (
    <div>
      {/* <TeamMember /> */}
      <Login />
      <Singup />
    </div>
  );
}
