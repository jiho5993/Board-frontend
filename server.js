const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {

  var server = express();

  /**
   * server render: read article
   */
  server.get('/article/:no', (req, res) => {
    const actualPage = '/read';
    const queryParams = { articleNo: req.params.no };
    app.render(req, res, actualPage, queryParams);
  });

  /**
   * server render: modify article
   */
  server.get('/mod/:no', (req, res) => {
    const actualPage = '/modify';
    const queryParams = { articleNo: req.params.no };
    app.render(req, res, actualPage, queryParams);
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if(err) {
      console.log(err);
    } else {
      console.log("started server on http://localhost:3000");
    }
  });

})
.catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
})