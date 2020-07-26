import Link from "next/link";
import React from "react";
import Header_css from "../../css/header_css";

const Header = () => {
  return (
    <div className={"header"}>
      <Header_css/>
      <ul>
        <li><Link href={"/"}><a className={"active"}>List</a></Link></li>
        <li><Link href={"/write"}><a>Write</a></Link></li>
        <li style={{ float: "right" }}><Link href={"/login"}><a>Login</a></Link></li>
      </ul>
    </div>
  )
};

export default Header;