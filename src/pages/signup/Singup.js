import React from "react";
import "./signup.css";

export default function Singup() {
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
            <button type="button" className="btn">
              SignUp
            </button>
            <div className="new-user-signup">
              <span>Already have account</span>{" "}
              <a className="signup" style={{ paddingLeft: "10px" }}>
                {" "}
                Login
              </a>
            </div>
          </form>
          <h5 style={{ textAlign: "center", fontSize: "24px" }}>
            Or sign in with:
          </h5>
          <div className="social">
            <a href="#">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
