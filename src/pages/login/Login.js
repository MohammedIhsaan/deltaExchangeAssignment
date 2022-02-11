import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/action";
import "./login.css";
export default function Login({ setpath }) {
  const dispatch = useDispatch();
  const history = useNavigate();

  const accessToken = useSelector((state) => state.authReducer.accessToken);
  const handlelogin = () => {
    dispatch(login());
  };

  useEffect(() => {
    if (accessToken) {
      history("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login-container">
      <div className="form-login">
        <div className="header">
          <h4 className="user-icon">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
        </div>
        <div className="body-form">
          <form>
            <div className="input-div">
              <i class="fa fa-user"></i>
              <input type="text" className="input" placeholder="Username" />
            </div>
            <div className="input-div">
              <i class="fa fa-lock"></i>
              <input type="text" className="input" placeholder="Password" />
            </div>
            <button type="button" className="btn-login">
              LOGIN
            </button>
            <div className="new-user-signup">
              <span>new user</span>{" "}
              <Link onClick={() => setpath("/signup")} to="/signup">
                <a className="signup" style={{ paddingLeft: "10px" }}>
                  {" "}
                  SignUp
                </a>
              </Link>
            </div>
          </form>
          <h5 style={{ textAlign: "center", fontSize: "24px" }}>
            Or sign in with:
          </h5>
          <div className="social">
            <a href="#">
              <i onClick={handlelogin} className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
