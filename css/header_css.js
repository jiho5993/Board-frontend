const Header_css = () => {
  return (
    <style jsx>{`
      .header ul {  
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
      }
      .header li {
        float: left;
      }
      .header a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      .header li a:hover {
        background-color: #111;
      }
      .header .search-container input[type=text] {
        padding: 6px;
        margin-top: 8px;
        font-size: 17px;
        border: none;
      }
      .header .search-container input[type=button] {
        float: right;
        padding: 6px 10px;
        margin-top: 8px;
        margin-right: 16px;
        background: #ddd;
        font-size: 17px;
        border: none;
        cursor: pointer;
      }
      .header .search-container input[type=button]:hover {
        background: #ccc;
      }
      .header .search-container .select-box {
        padding: 5px;
        font-size: 17px;
        border: none;
        width: 113px;
        margin: 2px;
      }
    `}</style>
  )
};

export default Header_css;