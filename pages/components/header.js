import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <ul>
        <li><Link href={"/list"}><a>List</a></Link></li>
        <li><Link href={"/write"}><a>Write</a></Link></li>
      </ul>
    </div>
  )
};

export default Header;