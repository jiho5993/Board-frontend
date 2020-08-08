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
                });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("로그아웃 되었습니다.");
        setIsLogined(0);
        setUserInfo({});
        Router.push("/");
    };

    const getKeyword = (e) => {
        setKeyword(e.target.value);
    };
    const getType = (e) => {
        setType(e.target.value);
    };

    const handleSearchPress = (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            Router.push({
                pathname: "/search",
                query: {
                    type: type,
                    keyword: keyword,
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
                <Link href={"/user"}>
                    <a>{userInfo.nickname}</a>
                </Link>
            </li>
            <li style={{ float: "right" }} onClick={handleLogout}>
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
                    <Link href={"/write"}>
                        <a>Write</a>
                    </Link>
                </li>
                <li className={"search-container"}>
                    <form method={"GET"}>
                        <select className={"select-box"} onChange={getType}>
                            <option value={"title"}>title</option>
                            <option value={"writer"}>writer</option>
                            <option value={"content"}>content</option>
                            <option value={"everything"}>everything</option>
                        </select>
                        <input
                            id={"keyword"}
                            type={"text"}
                            onKeyPress={handleSearchPress}
                            onChange={getKeyword}
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
