import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { loginByGoogle, registerStart } from "../../redux/actions/action";
import "./signup.css";

export default function Singup({ setpath }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [erorr, seterorr] = useState("");
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();

  let emailRef = useRef(),
    passwordRef = useRef(),
    confirmPasswordRef = useRef(),
    nameRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return seterorr("password do not matched");
    }

    dispatch(
      registerStart(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      )
    );
  }

  const handleLogin = () => {
    dispatch(loginByGoogle());
  };

  const { accessToken, user } = useSelector((state) => state.authReducer);
  console.log("fooooo", accessToken, user);

  useEffect(() => {
    if (accessToken) {
      history("/");
    }
    if (user) {
      console.log("user form if", user);
      history("/");
    }
  }, [accessToken, history, user]);

  return (
    <div className="signup-container">
      <div className="form-signup">
        <div className="header">
          <h4 className="user-icon">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
        </div>
        {erorr && <span>{erorr}</span>}
        <div className="body-form">
          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <i class="fa fa-user"></i>
              <input
                type="text"
                className="input"
                ref={nameRef}
                placeholder="Name"
              />
            </div>
            <div className="input-div">
              <i class="fa fa-solid fa-envelope"></i>
              <input
                type="text"
                className="input"
                ref={emailRef}
                placeholder="Email"
              />
            </div>
            <div className="input-div">
              <i class="fa fa-lock"></i>
              <input
                type="Password"
                className="input"
                ref={passwordRef}
                placeholder="Password"
              />
            </div>
            <div className="input-div">
              <i class="fa fa-lock"></i>
              <input
                type="Password"
                className="input"
                ref={confirmPasswordRef}
                placeholder="Confirm Password"
              />
            </div>
            <button disabled={loading} type="submit" className="btn-signup">
              SignUp
            </button>
            <div className="new-user-signup">
              <span>Already have account</span>{" "}
              <Link to="/login">
                <a className="signup" style={{ paddingLeft: "10px" }}>
                  {" "}
                  Login
                </a>
              </Link>
            </div>
          </form>
          <h5
            style={{
              textAlign: "center",
              fontSize: "24px",
              paddingTop: "10px",
            }}
          >
            Or sign in with:
          </h5>
          <div className="social">
            <a href="#">
              <i onClick={handleLogin} className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
