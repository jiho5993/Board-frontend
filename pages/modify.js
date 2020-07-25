import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Layout from "./components/layout";
import Router from "next/router";
import Modify_css from "../css/modify_css";

const Modify = (props) => {

  const { article } = props;

  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  const getTitle = (e) => { setTitle(e.target.value); }
  const getContent = (e) => { setContent(e.target.value); }

  const handleSubmit = () => {
    Axios.put(`http://localhost:3001/api/modify/${article.article_no}`, {
      title: title,
      content: content
    })
      .then(res => {
        console.log(res);
        alert('글이 수정되었습니다.');
        Router.push(`/article/${article.article_no}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <Layout>
      <Modify_css/>
      <div className={"mod-wrapper"}>
        <h1>Modify</h1>
        <form method={'POST'}>
          <div className={"title"}>
            <label>제목</label>
            <input id={"title"} type={"text"} onChange={getTitle} placeholder={"제목"} value={title} required/>
          </div>
          <div className={"writer"}>
            <label>작성자</label>
            <input id={"writer"} type={"text"} placeholder={"작성자"} value={article.writer} disabled/>
          </div>
          <div className={"content"}>
            <label>내용</label>
            <textarea style={{ height: "300px" }} id={"content"} onChange={getContent} placeholder={"내용"} value={content} required/>
          </div>
          <input type={"button"} onClick={handleSubmit} value={"글 수정하기"}/>
        </form>
      </div>
    </Layout>
  )
};

Modify.getInitialProps = async (req) => {
  const { articleNo } = req.query;
  const res = await Axios.get(`http://localhost:3001/api/read/${articleNo}`);
  const data = res.data[0];

  return {
    article: data
  };
}

export default Modify;