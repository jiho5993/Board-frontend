import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Axios from 'axios';
import Write_css from "../css/write_css";
import Layout from "./components/layout";

const Write = () => {

  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const getTitle = (e) => { setTitle(e.target.value); }
  const getWriter = (e) => { setWriter(e.target.value); }
  const getContent = (e) => { setContent(e.target.value); }

  const handleSubmit = () => {
    Axios.post('http://localhost:3001/api_article/write', {
        title: title,
        writer: writer,
        content: content
      })
      .then(res => {
        console.log(res);
        alert('글이 등록되었습니다.');
        Router.push('/index');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Layout>
      <Write_css/>
      <div className={"write-wrapper"}>
        <h1>Write</h1>
        <form method={'POST'}>
          <div className={"title"}>
            <label>제목</label>
            <input id={"title"} type={"text"} onChange={getTitle} placeholder={"제목"} required/><br/>
          </div>
          <div className={"writer"}>
            <label>작성자</label>
            <input id={"writer"} type={"text"} onChange={getWriter} placeholder={"작성자"} required/><br/>
          </div>
          <div className={"content"}>
            <label>내용</label>
            <textarea style={{ height: "300px" }} id={"content"} onChange={getContent} placeholder={"내용"} required/><br/>
          </div>
          <input type={"button"} onClick={handleSubmit} value={"글쓰기"}/>
        </form>
      </div>
    </Layout>
  )
};

export default Write;