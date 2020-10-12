import React, { useState } from "react";
import Layout from "./components/layout";
import Axios from "axios";
import Router from "next/router";
import Register_css from "../css/register_css";

const Register = () => {
  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const [uname, setUname] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = () => {
    Axios.post("http://localhost:3030/api/auth/register", {
      userid: uid,
      password: pwd,
      username: uname,
      nickname: nickname,
    })
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data.success) {
          alert("회원가입이 완료되었습니다.");
          Router.push("/login");
        } else {
          alert("중복된 아이디입니다.");
          console.log(data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Layout>
      <Register_css />
      <div className={"register-wrapper"}>
        <form method={"POST"}>
          <div className={"uid"}>
            <label>아이디</label>
            <input
              id={"uid"}
              type={"text"}
              onChange={(e) => setUid(e.target.value)}
              placeholder={"아이디"}
              required
            />
          </div>
          <div className={"pwd"}>
            <label>비밀번호</label>
            <input
              id={"pwd"}
              type={"password"}
              onChange={(e) => setPwd(e.target.value)}
              placeholder={"비밀번호"}
              required
            />
          </div>
          <div className={"uname"}>
            <label>이름</label>
            <input
              id={"uname"}
              type={"text"}
              onChange={(e) => setUname(e.target.value)}
              placeholder={"이름"}
              required
            />
          </div>
          <div className={"nickname"}>
            <label>닉네임</label>
            <input
              id={"nickname"}
              type={"text"}
              onChange={(e) => setNickname(e.target.value)}
              placeholder={"닉네임"}
              required
            />
          </div>
          <input type={"button"} onClick={handleSubmit} value={"회원가입"} />
        </form>
      </div>
    </Layout>
  );
};

export default Register;
