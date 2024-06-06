import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//Common으로 사용하는 전체 레이아웃
import classes from "../Common/Layout.module.css";
//LoginPage에서만 사용하는 css
import classesLogin from "./LoginPage.module.css";
import axios from "axios";
import { MemberContext } from "../ChatSpace/MemberContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const { setMember } = useContext(MemberContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/Mypage");
    }
  }, []);

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
    // if (password !== confirmPassword) {
    //   alert("비밀번호 확인과 맞게 기입해주시요!");
    //   return;
    // }

    try {
      const response = await axios.post("https://introme.co.kr/v1/member/signin", {
        password,
        email,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.status === 200) {
        const { member, token } = response.data;
        // 토큰과 회원 정보를 로컬 스토리지에 저장
        localStorage.setItem("token", token);
        localStorage.setItem("member", JSON.stringify(member));
        // 마이페이지로 이동
        navigate("/Mypage");
        alert("로그인 성공");
      }
    } catch (error) {
      if (error.response) {
        // 서버가 응답했지만 상태 코드가 2xx 범위에 있지 않음
        alert("등록 실패: " + (error.response.data.message || "서버 에러"));
        console.error(error.response.data); // 서버 응답 데이터 출력
      } else if (error.request) {
        // 요청이 전송되었지만 응답이 없음
        alert("등록 실패: 서버로부터 응답이 없습니다.");
        console.error(error.request);
      } else {
        // 요청 설정 중에 발생한 문제
        alert("등록 실패: " + error.message);
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
      {/*로고*/}
      <div className={classesLogin.LoginPageLogo}>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><p>IntroMe</p></Link>
      </div>

      {/*로그인 관련 전체 div*/}
      <div className={classesLogin.LoginPageContainer}>
        <form onSubmit={handleSubmit}>
          {/*이메일 인풋박스*/}
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

          {/*비밀번호 인풋박스*/}
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
