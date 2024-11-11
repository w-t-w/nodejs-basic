const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");

const game = require("./game");

const PORT = 3000;

const TEMPLATE_DIR = path.resolve(__dirname, "index.html");

const playerWonCode = 1;

const resultConfig = {
    "-1": "你输了!",
    0: "平局!",
    1: "你赢了!"
};

let playerWonCount = 0,
    playerLastAction = null,
    sameCount = 0;

const server = http.createServer(function (request, response) {
    const {pathname, query} = url.parse(request.url);

    if (pathname === "/favicon.ico") {
        response.writeHead(400);
        response.end("");
        return false;
    }

    if (pathname === "/game") {
        const {action} = querystring.parse(query);

        if (playerWonCount >= 3 || sameCount === 9) {
            response.writeHead(500);
            response.end("你太厉害了!我不跟你玩儿了!");
            return false;
        }

        if (sameCount >= 3) {
            sameCount = 9;
            response.writeHead(400);
            response.end("你作弊!");
            return false;
        }

        if (playerLastAction && playerLastAction === action) {
            sameCount++;
        } else {
            sameCount = 0;
        }
        playerLastAction = action;

        const result = game(action);

        if (result === playerWonCode) {
            playerWonCount++;
        }

        response.writeHead(200, {"content-type": "application/json"});
        response.end(resultConfig[result]);
    }

    if (pathname === "/") {
        response.writeHead(200, {"content-type": "text/html"});
        fs.createReadStream(TEMPLATE_DIR, "utf-8").pipe(response);
    }
});

server.listen(PORT, function () {
    console.log(`The server is running at http://localhost:${PORT}!`);
});
