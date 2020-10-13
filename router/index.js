module.exports = (server, app, handle) => {
  /**
   * server render: read article
   */
  server.get("/article/:no", (req, res) => {
    const actualPage = "/read";
    const queryParams = { articleNo: req.params.no };
    app.render(req, res, actualPage, queryParams);
  });

  /**
   * server render: modify article
   */
  server.get("/mod/:no", (req, res) => {
    const actualPage = "/modify";
    const queryParams = { articleNo: req.params.no };
    app.render(req, res, actualPage, queryParams);
  });

  /**
   * server render: search article
   */
  server.get("/search", (req, res) => {
    const { type, keyword } = req.query;
    const search = {
      type: type,
      keyword: keyword,
    };
    app.render(req, res, "/search", search);
  });

  /**
   * server render: pagination
   */
  server.get("/:page", (req, res) => {
    const actualPage = "/index";
    const queryParams = { curPage: req.params.page };
    app.render(req, res, actualPage, queryParams);
  });

  /**
   * server render: user's article
   */
  server.get("/:user/article", (req, res) => {
    const queryParams = {
      type: "writer",
      keyword: req.params.user
    };
    app.render(req, res, "/search", queryParams);
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
};
