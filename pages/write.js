import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Axios from 'axios';
import Header from "./components/header";

const Write = () => {

  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const getTitle = (e) => { setTitle(e.target.value); }
  const getWriter = (e) => { setWriter(e.target.value); }
  const getContent = (e) => { setContent(e.target.value); }

  const handleSubmit = () => {
    Axios.post('http://localhost:3001/api/write', {
        title: title,
        writer: writer,
        content: content
      })
      .then(res => {
        console.log(res);
        Router.push('/list');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div>
      <Header/>
      <form className={"write-article"} method={'POST'}>
        제목 <input id={"title"} onChange={getTitle} placeholder={"제목"} required/><br/>
        작성자 <input id={"writer"} onChange={getWriter} placeholder={"작성자"} required/><br/>
        내용 <textarea id={"content"} onChange={getContent} placeholder={"내용"} required/><br/>
        <input type={"button"} onClick={handleSubmit} value={"글쓰기"}/>
      </form>
    </div>
  )
};

export default Write;