import React from "react";
import classes from "../Common/Layout.module.css";

const LoginPage = () => {
  return (
    <>
      <div className={classes.LoginPageLayout}>
        <div
          style={{
            border: "1px solid black",
            width: "100%",
            height: "20vh",
            marginTop: "5vh",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <p style={{ fontSize: "8vh", fontWeight: "bold" }}>IntroMe</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
