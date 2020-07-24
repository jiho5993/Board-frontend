import React from 'react';
import Axios from 'axios';

const Read = (props) => {

  const { article } = props;

  return (
    <div>
      <h1>Read</h1>
      <h2>{article.title}</h2>
      <h3>{article.writer}</h3>
      <p>{article.content}</p>
    </div>
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