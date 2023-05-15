/* eslint-disable */
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <header>Westagram</header>
      <div className="inputBox">
        <input
          className="inputId"
          type={"text"}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input className="inputPw" type={"password"} />
        <button className="disabled" type="button">
          로그인
        </button>
        <a href="@@">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default Login;
