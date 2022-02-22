import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginByGoogle, loginStart } from "../../redux/actions/action";
import "./login.css";
export default function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [texterror, settexterror] = useState("");

  let emailRef = useRef(),
    passwordRef = useRef();

  const { accessToken, user, error } = useSelector(
    (state) => state.authReducer
  );

  async function handleSubmit(e) {
    e.preventDefault();
    settexterror("");
    if (!emailRef.current.value || !passwordRef.current.value) {
      settexterror("Fill All Input");
      return;
    }
    dispatch(loginStart(emailRef.current.value, passwordRef.current.value));
  }

  const handlelogin = () => {
    dispatch(loginByGoogle());
  };

  useEffect(() => {
    if (accessToken) {
      history("deltaExchangeAssignment/");
    }
    if (user) {
      console.log("user form if", user);
      history("deltaExchangeAssignment/");
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
        {texterror && <div className="login-error">{texterror}</div>}
        {error && <div className="login-error">{error}</div>}
        <div className="body-form">
          <form onSubmit={handleSubmit}>
            <div className="login-input-div">
              <i className="fa fa-user"></i>
              <input
                type="text"
                className="login-input"
                ref={emailRef}
                placeholder="Email"
              />
            </div>
            <div className="login-input-div">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                className="login-input"
                ref={passwordRef}
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn-login">
              LOGIN
            </button>
            <div className="login-new-user-signup">
              <span>new user</span>{" "}
              <Link
                className="login-signup"
                style={{ paddingLeft: "10px" }}
                to="/deltaExchangeAssignment/signup"
              >
                SignUp
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
            <i onClick={handlelogin} className="fab fa-google"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
