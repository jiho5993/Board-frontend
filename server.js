const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        var server = express();
        var router = require('./router/index')(server, app, handle);

        server.listen(3000, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("started server on http://localhost:3000");
            }
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
