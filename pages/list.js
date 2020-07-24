import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const List = () => {

  const [list, getList] = useState([]);

  /**
   * useEffect 두번째 인자 값이 없으면 컴포넌트가 렌더링 될 때마다 실행된다.
   * 따라서 []을 넣어야 무한루프에 걸리지 않는다.
   *
   * 두번째 인자의 역할은 dependency list배열인데,
   * 이전 렌더 때와 배열 내용이 바뀌는 경우에만 콜백을 다시 실행하도록 제한하는 인자이다.
   */
  useEffect(() => {
    Axios.get('http://localhost:3001/api/list')
      .then(res => {
        getList(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const ArticleList = list.map(t => (
    <div key={t.article_no}>
      <h2>{t.article_no}</h2>
      <h2>{t.title}</h2>
      <h3>{t.writer}</h3>
      <p>{t.content}</p>
      <p>{t.reg_date}</p>
      <p>--------------------------------------------------</p>
    </div>
  ))

  return (
    <div>
      <h1>list</h1>
      {ArticleList}
    </div>
  )
};

export default List;