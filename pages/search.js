import Axios from "axios";
import Link from "next/link";
import React from "react";
import Layout from "./components/layout";
import List_css from "../css/list_css";

const Search = (props) => {
    const article = props.article;

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
            <td>{t.reg_date}</td>
        </tr>
    ));

    return (
        <Layout>
            <div className={"board-wrapper"}>
                <List_css />
                <h1>list</h1>
                <table className={"table-board"}>
                    <thead>
                        <tr>
                            <th style={{ width: "5%" }}>#</th>
                            <th style={{ width: "50%" }}>제목</th>
                            <th style={{ width: "30%" }}>작성자</th>
                            <th style={{ width: "15%" }}>작성 일자</th>
                        </tr>
                    </thead>
                    <tbody>{ArticleList}</tbody>
                </table>
            </div>
        </Layout>
    );
};

Search.getInitialProps = async (req) => {
    const { type, keyword } = req.query;
    const res = await Axios.get("http://localhost:3030/api/article/search", {
        params: {
            type: type,
            keyword: keyword,
        },
    });

    return {
        article: res.data.article,
    };
};

export default Search;
