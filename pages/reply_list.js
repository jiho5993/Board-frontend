import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Reply_list_css from "../css/reply_list_css";

const Reply_list = (props) => {

  const { id } = props;
  const [reply, setReply] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3030/api/reply/list/${id}`)
      .then(res => {
        const data = res.data;
        props.count(data.count);
        setReply(data.reply);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const replyList = reply.map(re => (
    <div className={"reply-box"} key={re.reply_no}>
      <h3 className={"reply-nickname-box"}>{re.nickname}</h3>
      <h5 className={"reply-info-box"}>{re.reg_date}</h5>
      <p className={"reply-content-box"}>{re.content}</p>
    </div>
  ));

  return (
    <div>
      <Reply_list_css/>
      <div className={"reply-list"}>
        {replyList}
      </div>
    </div>
  )
};

export default Reply_list;