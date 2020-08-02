import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Axios from 'axios';

const Reply = (props) => {

  const [content, setContent] = useState("");

  const getContent = (e) => { setContent(e.target.value); }

  const handleSubmit = () => {
    if(content !== "") {
      Axios.post(`http://localhost:3030/api/reply/write`, {
        id: props.id,
        nickname: "test",
        content: content
      }).then(res => {
        console.log(res.data);
        Router.push(`/article/${props.id}`);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  return (
    <div className={"reply-form"}>
      <form action={"POST"}>
        <div className={"content"}>
          <label>내용</label>
          <input id={"content"} type={"text"} onChange={getContent} placeholder={"내용"} required/><br/>
        </div>
        <input type={"button"} onClick={handleSubmit} value={"댓글 등록"}/>
      </form>
    </div>
  )
};

export default Reply;