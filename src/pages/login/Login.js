import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  loginByGoogle,
  loginByEmail,
  loginStart,
} from "../../redux/actions/action";
import "./login.css";
export default function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);

  let emailRef = useRef(),
    passwordRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    if (!emailRef.current.value || !passwordRef.current.value) {
      return;
    }
    dispatch(loginStart(emailRef.current.value, passwordRef.current.value));
  }

  const { accessToken, user } = useSelector((state) => state.authReducer);
  const handlelogin = () => {
    dispatch(loginByGoogle());
  };

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
    <div className="login-container">
      <div className="form-login">
        <div className="login-header">
          <h4 className="user-icon">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
        </div>
        {error && <div>{error}</div>}
        <div className="body-form">
          <form onSubmit={handleSubmit}>
            <div className="login-input-div">
              <i class="fa fa-user"></i>
              <input
                type="text"
                className="login-input"
                ref={emailRef}
                placeholder="Email"
              />
            </div>
            <div className="login-input-div">
              <i class="fa fa-lock"></i>
              <input
                type="password"
                className="login-input"
                ref={passwordRef}
                placeholder="Password"
              />
            </div>
            <button disabled={loading} type="submit" className="btn-login">
              LOGIN
            </button>
            <div className="login-new-user-signup">
              <span>new user</span>{" "}
              <Link to="/signup">
                <a className="login-signup" style={{ paddingLeft: "10px" }}>
                  {" "}
                  SignUp
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
          <div className="login-social">
            <a href="#">
              <i onClick={handlelogin} className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
