const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const TEMPLATE = path.resolve(__dirname, "index.html");

const server = http.createServer((request, response) => {
    response.writeHead(200, {"content-type": "text/html"});
    fs.createReadStream(TEMPLATE, "utf-8").pipe(response);
});

server.listen(PORT, () => {
   console.log(`The server is running at http://localhost:${PORT}!`);
});
