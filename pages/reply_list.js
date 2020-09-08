import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import Axios from "axios";
import Reply_list_css from "../css/reply_list_css";

const Reply_list = (props) => {
    const { id } = props;
    const [reply, setReply] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3030/api/reply/list/${id}`)
            .then((res) => {
                const data = res.data;
                props.count(data.count);
                setReply(data.reply);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDel = (e) => {
        Axios.delete(`http://localhost:3030/api/reply/delete/${e.target.id}`)
            .then(res => {
                alert("댓글이 삭제되었습니다.");
                Router.push(`/article/${id}`);
            })
            .catch(err => {
                console.error(err);
            });
    };

    const replyList = reply.map((re) => (
        <div className={"reply-box"} key={re.reply_no}>
            <h3 className={"reply-nickname-box"}>{re.nickname}</h3>
            <h5 className={"reply-info-box"}>{re.reg_date}</h5>
            <p className={"reply-content-box"}>{re.content}</p>
            <Link href={{
                pathname: '/reply_modify',
                query: {
                    reply_no: re.reply_no,
                    article_no: id
                }
            }}
            >
                <button className={"btn mod-btn"}>수정</button>
            </Link>
            <button className={"btn del-btn"} id={re.reply_no} onClick={handleDel}>댓글 삭제</button>
        </div>
    ));

    return (
        <div>
            <Reply_list_css />
            <div className={"reply-list"}>{replyList}</div>
        </div>
    );
};

export default Reply_list;
