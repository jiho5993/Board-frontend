import React, { useState } from "react";
import Router from "next/router";
import Axios from "axios";
import Write_css from "../css/write_css";
import Layout from "./components/layout";

const Write = ({ userid }) => {
    const [title, setTitle] = useState("");
    const writer = userid;
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        Axios.post("http://localhost:3030/api/article/write", {
            title: title,
            writer: writer,
            content: content,
        })
            .then((res) => {
                console.log(res);
                alert("글이 등록되었습니다.");
                Router.push("/index");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Layout>
            <Write_css />
            <div className={"write-wrapper"}>
                <h1>Write</h1>
                <form method={"POST"}>
                    <div className={"title"}>
                        <label>제목</label>
                        <input
                            id={"title"}
                            type={"text"}
                            onChange={e => setTitle(e.target.value)}
                            placeholder={"제목"}
                            required
                        />
                        <br />
                    </div>
                    <div className={"writer"}>
                        <label>작성자</label>
                        <input
                            id={"writer"}
                            type={"text"}
                            value={userid}
                            placeholder={"작성자"}
                            readOnly
                        />
                        <br />
                    </div>
                    <div className={"content"}>
                        <label>내용</label>
                        <textarea
                            style={{ height: "300px" }}
                            id={"content"}
                            onChange={e => setContent(e.target.value)}
                            placeholder={"내용"}
                            required
                        />
                        <br />
                    </div>
                    <input
                        type={"button"}
                        onClick={handleSubmit}
                        value={"글쓰기"}
                    />
                </form>
            </div>
        </Layout>
    );
};

Write.getInitialProps = (res) => {
    return {
        userid: res.query.userid
    }
}

export default Write;
