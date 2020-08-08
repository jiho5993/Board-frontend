import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <div className={"main-layout"}>
            <Header />
            <section className={"children-wrapper"}>{children}</section>
            <Footer />
        </div>
    );
};

export default Layout;
