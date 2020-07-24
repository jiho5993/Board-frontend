import React, { useState, useEffect } from 'react';
import Link from "next/link";

const Index = () => {

  return (
    <div>
      <ul>
        <li><Link href={"/list"}><a>List</a></Link></li>
        <li><Link href={"/test"}><a>gregrehgtwrh</a></Link></li>
      </ul>
    </div>
  )

};

export default Index;