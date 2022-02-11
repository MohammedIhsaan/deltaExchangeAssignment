import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/action";
import "./signup.css";

export default function Singup({ setpath }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogin = () => {
    console.log("login attemted");
    dispatch(login());
  };

  const accessToken = useSelector((state) => state.authReducer.accessToken);
  console.log(accessToken);

  useEffect(() => {
    if (accessToken) {
      history("/");
    }
  }, [accessToken, history]);

  return (
    <div className="signup-container">
      <div className="form-signup">
        <div className="header">
          <h4 className="user-icon">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
        </div>
        <div className="body-form">
          <form>
            <div className="input-div">
              <i class="fa fa-user"></i>
              <input type="text" className="input" placeholder="Name" />
            </div>
            <div className="input-div">
              <i class="fa fa-solid fa-envelope"></i>
              <input type="text" className="input" placeholder="Email" />
            </div>
            <div className="input-div">
              <i class="fa fa-lock"></i>
              <input type="text" className="input" placeholder="Password" />
            </div>
            <div className="input-div">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                className="input"
                placeholder="Confirm Password"
              />
            </div>
            <button type="button" className="btn-signup">
              SignUp
            </button>
            <div className="new-user-signup">
              <span>Already have account</span>{" "}
              <Link onClick={() => setpath("/login")} to="/login">
                <a className="signup" style={{ paddingLeft: "10px" }}>
                  {" "}
                  Login
                </a>
              </Link>
            </div>
          </form>
          <h5 style={{ textAlign: "center", fontSize: "24px" }}>
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
