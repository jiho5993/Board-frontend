const Reply_list_css = () => {
  return (
    <style global jsx>{`
    .reply-list {
      list-style: none;
    }
    .reply-box {
      border-bottom-style: solid;
      border-bottom-color: silver;
      border-bottom-width: 3px;
    }
    .reply-box h3, h5 {
      font-weight: 700;
      margin: 5px 0 0 0;
    }
    `}</style>
  )
};

export default Reply_list_css;