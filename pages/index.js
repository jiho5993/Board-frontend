import React from "react";
import List from "./list";
import Layout from "./components/layout";
import Axios from "axios";

const Index = ({ pageNum, article, curPage }) => {
  return (
    <Layout>
      <List pageNum={pageNum} article={article} curPage={curPage} />
    </Layout>
  );
};

Index.getInitialProps = async (req) => {
  const { curPage } = req.query;
  const count_res = await Axios.get("http://localhost:3030/api/article/count");
  const list_res = await Axios.get("http://localhost:3030/api/article/list", {
    params: {
      page: /^\d+$/.test(curPage) ? curPage : 1,
    },
  });
  const { success, data } = count_res.data;
  const articleList = list_res.data;

  var page = Math.ceil(data.count / 15);
  const pageNum = [];
  for (var i = 1; i <= page; i++) {
    pageNum.push(i);
  }

  return {
    pageNum: success ? pageNum : [],
    article: articleList,
    curPage: curPage === undefined ? 1 : curPage,
  };
};

export default Index;
