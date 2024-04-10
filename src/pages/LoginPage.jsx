import { useState } from "react";
import "../styles/Login.css";
import Emailicon from "../components/icons/Emailicon";
import ProfileIcon from "../components/icons/ProfileIcon";
import LockIcon from "../components/icons/LockIcon";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  function clickLogin() {
    setIsLogin(true);
  }

  function clickRegister() {
    setIsLogin(false);
  }

  return (
    <>
      {isLogin ? (
        <Login onRegisterClick={clickRegister} />
      ) : (
        <RegisterPage onLoginClick={clickLogin} />
      )}
    </>
  );
}

function RegisterPage({ onLoginClick }) {
  return (
    <div className="main-container">
      <div className="main-reg">
        <div className="container-reg">
          <span className="title">Registration</span>
          <div className="input-faild">
            <input type="text" className="name-log" placeholder="Name"></input>
          </div>
          <div className="input-faild">
            <input
              type="email"
              className="email-log"
              placeholder="Email"
            ></input>
          </div>
          <div className="input-faild">
            <input
              type="password"
              className="email-log"
              placeholder="Password"
            ></input>
          </div>
          <div className="input-faild">
            <input
              type="password"
              className="email-log"
              placeholder="Confirm password"
            ></input>
          </div>
          <div className="checkbox-text">
            <div className="checkbox-content">
              <input type="checkbox" className="checkbox-input"></input>
              <span className="checkbox-span">Remember me</span>
            </div>
          </div>
          <div className="log-button">
            <input type="button" value="Login Now" required />
          </div>
          <div className="login-signup">
            <span>Уже есть аккаунт?</span>
            <button onClick={onLoginClick}>Login now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login({ onRegisterClick }) {
  return (
    <div className="main-container">
      <div className="main-log">
        <div className="container-reg">
          <span className="title">Login</span>
          <div className="input-faild">
            <input type="text" placeholder="Name"></input>
          </div>
          <div className="input-faild">
            <input type="email" placeholder="Email"></input>
          </div>
          <div className="input-faild">
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="checkbox-text">
            <div className="checkbox-content">
              <input type="checkbox" className="checkbox-input"></input>
              <span className="checkbox-span">Remember me</span>
            </div>
            <a href="#" class="text">
              Forgot password?
            </a>
          </div>
          <div className="log-button">
            <input type="button" value="Login Now" required />
          </div>
          <div className="login-signup">
            <span>Нету аккаунта?</span>
            <button onClick={onRegisterClick}>Sign now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
