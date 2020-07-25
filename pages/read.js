import React from 'react';
import Axios from 'axios';
import Header from "./components/header";
import Link from "next/link";
import Layout from "./components/layout";

const Read = (props) => {

  const { article } = props;

  return (
    <Layout>
      <h1>Read</h1>
      <h2>{article.title}</h2>
      <h3>{article.writer}</h3>
      <p>{article.content}</p>
      <Link as={`/mod/${article.article_no}`} href={`/modify?articleNo=${article.article_no}`}>
        <button>수정</button>
      </Link>
    </Layout>
  )
};

Read.getInitialProps = async (req) => {
  const { articleNo } = req.query;
  const res = await Axios(`http://localhost:3001/api/read/${articleNo}`);
  const data = res.data[0];

  return {
    article: data
  };
}

export default Read;