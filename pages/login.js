import React, { useState, useEffect } from 'react';
import Layout from "./components/layout";
import Axios from "axios";
import Router from "next/router";

const Login = () => {

  const [userid, setUserid] = useState("");
  const [pwd, setPwd] = useState("");

  const getUserid = (e) => { setUserid(e.target.value); }
  const getPwd = (e) => { setPwd(e.target.value); }

  // const handleSubmit = () => {
  //   Axios.post('http://localhost:3001/api_user/login', {
  //       uid: userid,
  //       pwd: pwd
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //       // localStorage.setItem('user', )
  //       alert('성공적으로 로그인되었습니다.');
  //       Router.push('/index');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  return (
    <Layout>
      <div className={"login-wrapper"}>
        <form method={'POST'}>
          <div className={"userid"}>
            <label>아이디</label>
            <input id={"userid"} type={"text"} onChange={getUserid} placeholder={"아이디"} required/>
          </div>
          <div className={"password"}>
            <label>비밀번호</label>
            <input id={"password"} type={"password"} onChange={getPwd} placeholder={"비밀번호"} required/>
          </div>
          <input type={"button"} onClick={handleSubmit} value={"로그인"}/>
        </form>
      </div>
    </Layout>
  )
};

export default Login;