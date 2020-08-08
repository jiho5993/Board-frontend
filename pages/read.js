import React, { useState } from "react";
import Axios from "axios";
import Link from "next/link";
import Router from "next/router";
import Layout from "./components/layout";
import Read_css from "../css/read_css";
import Reply_form from "./reply_form";
import Reply_list from "./reply_list";

const Read = (props) => {
    const { article } = props;

    const [replyCount, setReplyCount] = useState(0);

    const handleDel = () => {
        Axios.delete(
            `http://localhost:3030/api/article/delete/${article.article_no}`
        )
            .then((res) => {
                alert("글이 삭제되었습니다.");
                Router.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const getReplyCount = (cnt) => {
        setReplyCount(cnt);
    };

    const contentLine = article.content.split("\n").map((sentence) => (
        <div className={"sentence"}>
            {sentence}
            <br />
        </div>
    ));

    return (
        <Layout>
            <Read_css />
            <div className={"read-wrapper"}>
                <div className={"article-info"}>
                    <h1>제목: {article.title}</h1>
                    <h2>작성자: {article.writer}</h2>
                </div>
                <div className={"read-content"}>
                    <h2>내용</h2>
                    {contentLine}
                </div>
                <div className={"reply"}>
                    <h2>댓글 ({replyCount})</h2>
                    <Reply_list id={article.article_no} count={getReplyCount} />
                    <Reply_form id={article.article_no} />
                </div>
                <Link
                    as={`/mod/${article.article_no}`}
                    href={`/modify?articleNo=${article.article_no}`}
                >
                    <button className={"btn mod-btn"}>수정</button>
                </Link>
                <button className={"btn del-btn"} onClick={handleDel}>
                    글 삭제
                </button>
            </div>
        </Layout>
    );
};

Read.getInitialProps = async (req) => {
    const { articleNo } = req.query;
    const res = await Axios.get(
        `http://localhost:3030/api/article/read/${articleNo}`
    );
    const data = res.data[0];

    return {
        article: data,
    };
};

export default Read;
