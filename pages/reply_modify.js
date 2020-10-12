import React from "react";
import Axios from "axios";
import Layout from "./components/layout";

const Reply_modify = ({ reply_no, article_no, content }) => {
  return (
    <Layout>
      <p>{reply_no}</p>
      <p>{article_no}</p>
      <p>{content}</p>
    </Layout>
  );
};

Reply_modify.getInitialProps = async (req) => {
  const { reply_no, article_no } = req.query;
  const res = await Axios.get(
    `http://localhost:3030/api/reply/get_reply/${reply_no}`
  );
  const data = res.data;

  return {
    reply_no,
    article_no,
    content: data.content,
  };
};

export default Reply_modify;
