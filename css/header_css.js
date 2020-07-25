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
    `}</style>
  )
};

export default Header_css;