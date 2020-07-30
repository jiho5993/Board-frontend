import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Header_css from "../../css/header_css";
import Axios from "axios";

const Header = () => {

  const [userInfo, setUserInfo] = useState({});

  const signPages = (
    <div className={"sign"}>
      <li style={{ float: "right" }}><Link href={"/login"}><a>Login</a></Link></li>
      <li style={{ float: "right" }}><Link href={"/sign_up"}><a>Sign Up</a></Link></li>
    </div>
  );

  const userPage = (
    <li style={{ float: "right" }}><Link href={"/user"}><a>{userInfo.nickname}</a></Link></li>
  );

  return (
    <div className={"header"}>
      <Header_css/>
      <ul>
        <li><Link href={"/"}><a className={"active"}>List</a></Link></li>
        <li><Link href={"/write"}><a>Write</a></Link></li>
        {signPages}
        {/*{userInfo.is_logon ? userPage : signPages}*/}
      </ul>
    </div>
  )
};

export default Header;