import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Link from "next/link";
import Header from "./components/header";
import List_css from "../css/list_css";

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
    <tr key={t.article_no}>
      <td>{t.article_no}</td>
      <td>
        <Link as={`/article/${t.article_no}`} href={`/read?articleNo=${t.article_no}`}>
          <a>{t.title}</a>
        </Link>
      </td>
      <td>{t.writer}</td>
      <td>0</td>
    </tr>
  ))

  return (
    <div className={"board-wrapper"}>
      <List_css/>
      <h1>list</h1>
      <table className={'table-board'}>
        <thead>
        <tr>
          <th style={{ width: "10%" }}>#</th>
          <th style={{ width: "50%" }}>title</th>
          <th style={{ width: "30%" }}>writer</th>
          <th style={{ width: "10%" }}>view_cnt</th>
        </tr>
        </thead>
        <tbody>
        {ArticleList}
        </tbody>
      </table>
    </div>
  )
};

export default List;