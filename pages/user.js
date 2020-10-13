import React from "react";
import Layout from "./components/layout";
import Axios from "axios";
import Link from "next/link";

const User = ({ user }) => {

  const { userid, username, nickname } = user;

  return (
    <Layout>
      <p>내 아이디 : {userid}</p>
      <p>내 이름 : {username}</p>
      <p>내 닉네임 : {nickname}</p>
      <Link
        as={`/${userid}/article`}
        href={`/search?type=writer&keyword=${userid}`}
      >
        <a>내가 쓴 게시글</a>
      </Link>
    </Layout>
  );
};

User.getInitialProps = async () => {
  const token = localStorage.getItem("token");
  const { data } = await Axios.get("http://localhost:3030/api/auth/check", {
    headers: {
      "x-access-token": token,
    }
  });
  
  return {
    user: data.info
  };
};

export default User;
