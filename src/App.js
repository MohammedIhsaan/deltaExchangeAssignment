import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import TeamMember from "./components/TeamMember";
import { auth } from "./firebase";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

export default function App() {
  const [currentUser, setcurrentUser] = useState(null);
  const [load, setload] = useState(true);
  const { accessToken, loading, user } = useSelector(
    (state) => state.authReducer
  );
  console.log("!user", !user);
  console.log(!loading && !accessToken && !user);
  const history = useNavigate();

  // console.log("form mai app", currentUser?.email);
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setcurrentUser(user);
  //     setload(false);
  //   });
  //   return unsubscribe;
  // }, []);

  useEffect(() => {
    user ? history("/") : history("/login");
    accessToken ? history("/") : history("/login");
  }, []);

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
