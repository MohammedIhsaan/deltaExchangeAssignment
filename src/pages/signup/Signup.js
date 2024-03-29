import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginByGoogle, registerStart } from "../../redux/actions/action";
import "./signup.css";

export default function Singup({ setpath }) {
  const [texterorr, seterorr] = useState("");
  const dispatch = useDispatch();
  const history = useNavigate();

  let emailRef = useRef(),
    passwordRef = useRef(),
    confirmPasswordRef = useRef(),
    nameRef = useRef();

  const { accessToken, user, error } = useSelector(
    (state) => state.authReducer
  );

  async function handleSubmit(e) {
    e.preventDefault();
    seterorr("");
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      seterorr("password do not matched");
      return;
    }
    if (
      emailRef.current.value === "" ||
      nameRef.current.value === "" ||
      passwordRef.current.value === "" ||
      confirmPasswordRef.current.value === ""
    ) {
      seterorr("Fill All Input");
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

  useEffect(() => {
    if (accessToken) {
      history("/deltaExchangeAssignment");
    }
    if (user) {
      console.log("user form if", user);
      history("/deltaExchangeAssignment");
    }
  }, [accessToken, history, user]);

  return (
    <div className='signup-container'>
      <div className='form-signup'>
        <div className='header'>
          <h4 className='user-icon'>
            <i className='fa fa-user-circle' style={{ fontSize: "110px" }}></i>
          </h4>
        </div>
        {texterorr && <span className='signup-error'>{texterorr}</span>}
        {error && <span className='signup-error'>{error}</span>}
        <div className='body-form'>
          <form onSubmit={handleSubmit}>
            <div className='input-div'>
              <i class='fa fa-user'></i>
              <input
                type='text'
                className='input'
                ref={nameRef}
                placeholder='Name'
              />
            </div>
            <div className='input-div'>
              <i class='fa fa-solid fa-envelope'></i>
              <input
                type='text'
                className='input'
                ref={emailRef}
                placeholder='Email'
              />
            </div>
            <div className='input-div'>
              <i class='fa fa-lock'></i>
              <input
                type='Password'
                className='input'
                ref={passwordRef}
                placeholder='Password'
              />
            </div>
            <div className='input-div'>
              <i className='fa fa-lock'></i>
              <input
                type='Password'
                className='input'
                ref={confirmPasswordRef}
                placeholder='Confirm Password'
              />
            </div>
            <button type='submit' className='btn-signup'>
              SignUp
            </button>
            <div className='new-user-signup'>
              <span>Already have account</span>{" "}
              <Link
                className='signup'
                style={{ paddingLeft: "10px" }}
                to='/deltaExchangeAssignment/login'
              >
                Login
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
          <div className='social'>
            <i onClick={handleLogin} className='fab fa-google'></i>
          </div>
        </div>
      </div>
    </div>
  );
}
