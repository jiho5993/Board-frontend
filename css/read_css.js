const Read_css = () => {
  return (
    <style global jsx>{`
    .btn {
      border: none;
      color: white;
      padding: 0.7% 1%;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 12px;
    }
    .mod-btn {
      background-color: #4CAF50;
    }
    .mod-btn:hover {
      background-color: #006400;
    }
    .del-btn {
      background-color: #f44336;
    }
    .del-btn:hover {
      background-color: #a00000;
    }
    .article-info h1 {
      font-size: 250%;
    }
    .article-info h2 {
      font-size: 100%
    }
    `}</style>
  )
};

export default Read_css;