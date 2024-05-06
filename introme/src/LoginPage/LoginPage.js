import React, { useState } from "react";
import { Link } from "react-router-dom";
//Common으로 사용하는 전체 레이아웃
import classes from "../Common/Layout.module.css";
//LoginPage에서만 사용하는 css
import classesLogin from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClearEmail = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAutoLoginChange = () => {
    setAutoLogin(!autoLogin);
  };

  return (
    <div className={classes.LoginPageLayout}>
      {/*로고*/}
      <div className={classesLogin.LoginPageLogo}>
        <p>IntroMe</p>
      </div>

      {/*로그인 관련 전체 div*/}
      <div className={classesLogin.LoginPageContainer}>
        <form onSubmit={handleSubmit}>
          {/*이메일 인풋박스*/}
          <div style={{ marginBottom: "1rem", position: "relative" }}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              style={{
                width: "calc(100% - 30px)", 
                padding: "0.5rem",
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
              }}
              required
            />
            {email && (
              <button
                onClick={handleClearEmail}
                style={{
                  position: "absolute",
                  right: "5px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            )}
          </div>

          {/*비밀번호 인풋박스*/}
          <div style={{ marginBottom: "1rem", position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                width: "calc(100% - 30px)", 
                padding: "0.5rem",
                border: "none",
                borderBottom: "1px solid black",
                background: "none",
                boxShadow: "none",
                outline: "none",
              }}
              required
            />
            <button
              onClick={toggleShowPassword}
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {showPassword ? "👁️" : "👁️"}
            </button>
          </div>

          {/*로그인 버튼*/}
          <button
            type="submit"
            style={{
              backgroundColor: "#4755D7",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              width: "45vh",
              height: "6.5vh",
              cursor: "pointer",
            }}
          >
            로그인
          </button>
        </form>
        {/*자동로그인 & 회원가입, 비밀번호 찾기 */}
        <div className={classesLogin.BottomContainer}>
          <div style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              id="autoLogin"
              checked={autoLogin}
              onChange={handleAutoLoginChange}
              style={{ marginRight: "0.5rem" }}
            />
            <label htmlFor="autoLogin">자동로그인</label>
          </div>
          <div>
            <Link
              to="/SignupPage"
              style={{
                marginRight: "0.8rem",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              회원가입
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              비밀번호 찾기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
