import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import Header_css from "../../css/header_css";
import Axios from "axios";

const Header = () => {
  const [isLogined, setIsLogined] = useState(0);
  const [userInfo, setUserInfo] = useState({});
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("title");

  /**
   * useEffect 두번째 인자 값이 없으면 컴포넌트가 렌더링 될 때마다 실행된다.
   * 따라서 []을 넣어야 무한루프에 걸리지 않는다.
   *
   * 두번째 인자의 역할은 dependency list배열인데,
   * 이전 렌더 때와 배열 내용이 바뀌는 경우에만 콜백을 다시 실행하도록 제한하는 인자이다.
   */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      Axios.get("http://localhost:3030/api/auth/check", {
        headers: {
          "x-access-token": token,
        },
      })
        .then((res) => {
          const data = res.data;
          if (data.success) {
            setUserInfo(data.info);
            setIsLogined(data.success);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
        });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    alert("로그아웃 되었습니다.");
    setIsLogined(0);
    setUserInfo({});
    Router.push("/");
  };

  const handleWriteAuthority = () => {
    if (!isLogined) {
      alert("로그인 후에 이용가능합니다.");
      Router.push("/login");
    } else {
      Router.push({
        pathname: "/write",
        query: {
          userid: userInfo.userid,
        },
      });
    }
  };

  const signPages = (
    <div className={"sign"}>
      <li style={{ float: "right" }}>
        <Link href={"/login"}>
          <a>Login</a>
        </Link>
      </li>
      <li style={{ float: "right" }}>
        <Link href={"/register"}>
          <a>Sign Up</a>
        </Link>
      </li>
    </div>
  );

  const userPage = (
    <div className={"out userinfo"}>
      <li style={{ float: "right" }}>
        <Link as={`/${userInfo.userid}`} href={"/user"}>
          <a>{userInfo.nickname}</a>
        </Link>
      </li>
      <li style={{ float: "right", cursor: "pointer" }} onClick={handleLogout}>
        <a>Logout</a>
      </li>
    </div>
  );

  return (
    <div className={"header"}>
      <Header_css />
      <ul>
        <li>
          <Link href={"/"}>
            <a className={"active"}>List</a>
          </Link>
        </li>
        <li>
          <a onClick={handleWriteAuthority} style={{ cursor: "pointer" }}>
            Write
          </a>
        </li>
        <li className={"search-container"}>
          <form method={"GET"}>
            <select
              className={"select-box"}
              onChange={(e) => setType(e.target.value)}
            >
              <option value={"title"}>title</option>
              <option value={"writer"}>writer</option>
              <option value={"content"}>content</option>
              <option value={"everything"}>everything</option>
            </select>
            <input
              id={"keyword"}
              type={"text"}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={"Search.."}
            />
            <Link href={`/search?type=${type}&keyword=${keyword}`}>
              <input type={"button"} value={"Search"} />
            </Link>
          </form>
        </li>
        {isLogined ? userPage : signPages}
      </ul>
    </div>
  );
};

export default Header;
