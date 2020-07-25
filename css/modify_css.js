const Modify_css = () => {
  return (
    <style global jsx>{`
    .mod-wrapper {
      border-radius: 5px;
      background-color: #f2f2f2;
      padding: 20px;
    }
    .mod-wrapper input[type=text], textarea {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    .mod-wrapper input[type=button] {
      width: 100%;
      background-color: #4CAF50;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .mod-wrapper input[type=button]:hover {
      background-color: #45a049;
    }
    `}</style>
  )
};

export default Modify_css;