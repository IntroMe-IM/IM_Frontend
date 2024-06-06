import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MemberContext } from "../ChatSpace/MemberContext"; // 경로는 실제 파일 경로에 맞게 수정하세요
import classes from "../Common/Layout.module.css";
import classesLogin from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const { setMember } = useContext(MemberContext);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://introme.co.kr/v1/member/signin", {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.status === 200) {
        const member = response.data.member;
        setMember(member);
        alert(`환영합니다 ${member.name}님!`);
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      if (error.response) {
        alert("로그인 실패: " + (error.response.data.message || "서버 에러"));
        console.error(error.response.data);
      } else if (error.request) {
        alert("로그인 실패: 서버로부터 응답이 없습니다.");
        console.error(error.request);
      } else {
        alert("로그인 실패: " + error.message);
        console.error('Error', error.message);
      }
      console.error(error.config);
    }
  };

  const handleAutoLoginChange = () => {
    setAutoLogin(!autoLogin);
  };

  return (
    <div className={classes.LoginPageLayout}>
      <div className={classesLogin.LoginPageLogo}>
        <p>IntroMe</p>
      </div>
      <div className={classesLogin.LoginPageContainer}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem", position: "relative" }}>
            <input
              type="email"
              placeholder="이메일"
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

          <div style={{ marginBottom: "1rem", position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
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
