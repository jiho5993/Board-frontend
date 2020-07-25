import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Axios from 'axios';
import Header from "./components/header";
import Layout from "./components/layout";

const Modify = (props) => {

  const { article } = props;

  return (
    <Layout>
      mod {article.article_no}
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