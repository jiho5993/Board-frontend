import React from 'react';
import Axios from 'axios';
import Link from "next/link";
import Router from 'next/router';
import Layout from "./components/layout";
import Read_css from "../css/read_css";
import Reply from "./reply";

const Read = (props) => {

  const { article, reply } = props;

  const handleDel = () => {
    Axios.delete(`http://localhost:3030/api/article/delete/${article.article_no}`)
      .then(res => {
        alert("글이 삭제되었습니다.");
        Router.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const contentLine = article.content.split('\n').map(sentence => (
    <div className={"sentence"}>
      {sentence}
      <br/>
    </div>
  ));

  const replyList = reply.map(re => (
    <div key={re.reply_no}>
      <h3>{re.nickname} ||| {re.reg_date}</h3>
      <p>{re.content}</p>
      <p>--------------------------------------------------------------</p>
    </div>
  ));

  return (
    <Layout>
      <Read_css/>
      <div className={"read-wrapper"}>
        <div className={"article-info"}>
          <h1>제목: {article.title}</h1>
          <h2>작성자: {article.writer}</h2>
        </div>
        <div className={"content"}>
          <h2>내용</h2>
          {contentLine}
        </div>
        <p>-----------------------------------------------------------</p>
        <div className={"reply"}>
          {replyList}
          <Reply id={article.article_no}/>
        </div>
        <Link as={`/mod/${article.article_no}`} href={`/modify?articleNo=${article.article_no}`}>
          <button className={"btn mod-btn"}>수정</button>
        </Link>
        <button className={"btn del-btn"} onClick={handleDel}>글 삭제</button>
      </div>
    </Layout>
  )
};

Read.getInitialProps = async (req) => {
  const { articleNo } = req.query;

  const article_res = await Axios.get(`http://localhost:3030/api/article/read/${articleNo}`);
  const reply_res = await Axios.get(`http://localhost:3030/api/reply/list/${articleNo}`);

  const articles = article_res.data[0];
  var replys = reply_res.data;

  if(!replys) {
    replys = [];
  }

  return {
    article: articles,
    reply: replys.reply
  };
}

export default Read;