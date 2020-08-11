import React, { useState } from "react";
import Layout from "./components/layout";
import Axios from "axios";
import Router from "next/router";
import Login_css from "../css/login_css";

const Login = () => {
    const [userid, setUserid] = useState("");
    const [pwd, setPwd] = useState("");

    const handleSubmit = () => {
        Axios.post("http://localhost:3030/api/auth/login", {
            userid: userid,
            password: pwd,
        })
            .then((res) => {
                const data = res.data;
                if (data.success) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("userId", userid);
                    alert("성공적으로 로그인되었습니다.");
                    Router.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("로그인에 실패하였습니다.");
                Router.push("/login");
            });
    };

    return (
        <Layout>
            <Login_css />
            <div className={"login-wrapper"}>
                <form method={"POST"}>
                    <div className={"userid"}>
                        <label>아이디</label>
                        <input
                            id={"userid"}
                            type={"text"}
                            onChange={e => setUserid(e.target.value)}
                            placeholder={"아이디"}
                            required
                        />
                    </div>
                    <div className={"password"}>
                        <label>비밀번호</label>
                        <input
                            id={"password"}
                            type={"password"}
                            onChange={e => setPwd(e.target.value)}
                            placeholder={"비밀번호"}
                            required
                        />
                    </div>
                    <input
                        type={"button"}
                        onClick={handleSubmit}
                        value={"로그인"}
                    />
                </form>
            </div>
        </Layout>
    );
};

export default Login;
