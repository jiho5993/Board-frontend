import React, { useState, useEffect } from 'react';
import Layout from "./components/layout";
import Axios from "axios";
import Router from "next/router";
import Register_css from "../css/register_css";

const Register = () => {

  const [uid, setUid] = useState("");
  const [pwd, setPwd] = useState("");
  const [uname, setUname] = useState("");
  const [nickname, setNickname] = useState("");

  const getUid = (e) => { setUid(e.target.value); }
  const getPwd = (e) => { setPwd(e.target.value); }
  const getUname = (e) => { setUname(e.target.value); }
  const getNickname = (e) => { setNickname(e.target.value); }

  const handleSubmit = () => {
    Axios.post('http://localhost:3030/api/auth/register', {
        "userid": uid,
        "password": pwd,
        "username": uname,
        "nickname": nickname
      })
      .then(res => {
        const data = res.data;
        console.log(data);
        if(data.success) {
          alert("회원가입이 완료되었습니다.");
          Router.push('/index');
        } else {
          alert("중복된 아이디입니다.");
          console.log(data.error);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Layout>
      <Register_css/>
      <div className={"register-wrapper"}>
        <form action={"POST"}>
          <div className={"uid"}>
            <label>아이디</label>
            <input id={"uid"} type={"text"} onChange={getUid} placeholder={"아이디"} required/>
          </div>
          <div className={"pwd"}>
            <label>비밀번호</label>
            <input id={"pwd"} type={"password"} onChange={getPwd} placeholder={"비밀번호"} required/>
          </div>
          <div className={"uname"}>
            <label>이름</label>
            <input id={"uname"} type={"text"} onChange={getUname} placeholder={"이름"} required/>
          </div>
          <div className={"nickname"}>
            <label>닉네임</label>
            <input id={"nickname"} type={"text"} onChange={getNickname} placeholder={"닉네임"} required/>
          </div>
          <input type={"button"} onClick={handleSubmit} value={"회원가입"}/>
        </form>
      </div>
    </Layout>
  )
};

export default Register;