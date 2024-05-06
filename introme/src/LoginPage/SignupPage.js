import React, { useState } from "react";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPhoneNumber, setConfirmPhoneNumber] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleBirthdate = (e) => {
    setBirthdate(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPhoneNumber = (e) => {
    setConfirmPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {/*헤더 부분*/}
      <div
        style={{
          // border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "6vh",
        }}
      >
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            position: "absolute",
            left: "0px",
            fontSize: "2rem",
          }}
          onClick={() => window.history.back()}
        >
          ←
        </button>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "1vh" }}>
          회원가입
        </p>
      </div>

      {/*설명 부분*/}
      <div>
        <p
          style={{
            marginTop: "5vh",
            margin: "4.2vh",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          자신의 이력과 프로필을 <br /> 효율적으로 공유해보세요
        </p>
      </div>
      <div
        style={{
          width: "45vh",
          margin: "0 auto",
          marginTop: "5vh",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "1rem", position: "relative" }}>
            <input
              type="text"
              value={name}
              onChange={handleName}
              placeholder="이름"
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
          </div>

          <div
            style={{
              marginBottom: "1rem",
              marginTop: "1.5rem",
              position: "relative",
            }}
          >
            <input
              type="number"
              placeholder="생년월일"
              value={birthdate}
              onChange={handleBirthdate}
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
          </div>

          <div
            style={{
              marginBottom: "1rem",
              marginTop: "1.5rem",
              position: "relative",
            }}
          >
            <input
              type="email"
              placeholder="이메일"
              value={email}
              onChange={handleEmail}
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
          </div>

          <div
            style={{
              marginBottom: "1rem",
              marginTop: "1.5rem",
              position: "relative",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호"
              value={password}
              onChange={handlePassword}
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

          <div
            style={{
              marginBottom: "1rem",
              marginTop: "1.5rem",
              position: "relative",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={handleConfirmPassword}
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

          <div
            style={{
              marginBottom: "1rem",
              marginTop: "1.5rem",
              position: "relative",
            }}
          >
            <input
              type="number"
              placeholder="휴대폰"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              style={{
                width: "calc(100% - 19.6vh)",
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
              style={{
                backgroundColor: "#4755D7",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                height: "6vh",
                width: "15vh",
                margin: "0.5vh",
                cursor: "pointer",
              }}
            >
              인증번호 받기
            </button>
          </div>

          <div style={{ marginBottom: "1rem", position: "relative" }}>
            <input
              type="number"
              placeholder=""
              value={confirmPhoneNumber}
              onChange={toggleConfirmPhoneNumber}
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
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
