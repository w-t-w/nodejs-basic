const Koa = require("koa");
const koaMount = require("koa-mount");
const path = require("path");
const fs = require("fs");

const gameKoa = require("./gameKoa");

const PORT = 3000;

const TEMPLATE_PATH = path.resolve(__dirname, "index.html");

const koa = new Koa();

koa.use(
    koaMount("/favicon.ico", function ({response}) {
        response.status = 400;
        response.body = "";
        return false;
    })
);

koa.use(
    koaMount("/game", gameKoa),
);

koa.use(
    koaMount("/", function ({response}) {
        response.status = 200;
        response.body = fs.readFileSync(TEMPLATE_PATH, "utf-8");
    })
);

koa.listen(PORT, function () {
    console.log(`The server is running at http://localhost:${PORT}!`);
});


