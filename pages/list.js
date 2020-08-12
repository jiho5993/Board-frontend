import React  from "react";
import Link from "next/link";
import List_css from "../css/list_css";

const List = ({ pageNum, article }) => {

    const ArticleList = article.map((t) => (
        <tr key={t.article_no}>
            <td>{t.article_no}</td>
            <td>
                <Link
                    as={`/article/${t.article_no}`}
                    href={`/read?articleNo=${t.article_no}`}
                >
                    <a>{t.title}</a>
                </Link>
            </td>
            <td>{t.writer}</td>
            <td>{t.view_cnt}</td>
            <td>{t.reg_date}</td>
        </tr>
    ));

    const pagination = pageNum.map((num) => (
        <Link
            href={{
                pathname: '/index',
                query: {
                    curPage: num
                }
            }}
            as={`/${num}`}
        >
            <a>{num}</a>
        </Link>
    ));

    return (
        <div className={"board-wrapper"}>
            <List_css />
            <h1>list</h1>
            <table className={"table-board"}>
                <thead>
                    <tr>
                        <th style={{ width: "5%" }}>#</th>
                        <th style={{ width: "50%" }}>제목</th>
                        <th style={{ width: "20%" }}>작성자</th>
                        <th style={{ width: "10%" }}>조회수</th>
                        <th style={{ width: "15%" }}>작성 일자</th>
                    </tr>
                </thead>
                <tbody>{ArticleList}</tbody>
            </table>
            <div className={"pagination"}>
                <a href="#">&laquo;</a>
                {pagination}
                <a href="#">&raquo;</a>
            </div>
        </div>
    );
};

export default List;
