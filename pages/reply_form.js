import React, { useState } from "react";
import Router from "next/router";
import Axios from "axios";
import Reply_form_css from "../css/reply_form_css";

const Reply_form = ({ id }) => {
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        const userId = localStorage.getItem("userId");
        if(userId === null) {
            alert("로그인 후에 이용가능합니다.");
        }
        else if (content !== "") {
            Axios.post(`http://localhost:3030/api/reply/write`, {
                id: id,
                nickname: userId,
                content: content,
            })
                .then((res) => {
                    console.log(res.data);
                    Router.push(`/article/${id}`);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <div className={"reply-form"}>
            <Reply_form_css />
            <form method={"POST"}>
                <div className={"reply-input-box"}>
                    <label>
                        <b>댓글</b>
                    </label>
                    <textarea
                        id={"content"}
                        onChange={e => setContent(e.target.value)}
                        placeholder={"댓글"}
                        required
                    />
                </div>
                <input
                    type={"button"}
                    onClick={handleSubmit}
                    value={"댓글 등록"}
                />
            </form>
        </div>
    );
};

export default Reply_form;
