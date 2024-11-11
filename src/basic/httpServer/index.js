// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const path = require("path");
//
// const PORT = 3000;
//
// const TEMPLATE = path.resolve(__dirname, "index.html");
//
// const server = http.createServer((request, response) => {
//     const {pathname} = url.parse(request.url);
//
//     if (pathname === "/favicon.ico") {
//         response.writeHead(400);
//         response.end("");
//         return false;
//     }
//
//     if (pathname === "/") {
//         response.writeHead(200, {"content-type": "text/html"});
//         fs.createReadStream(TEMPLATE, "utf-8").pipe(response);
//     }
// });
//
// server.listen(PORT, () => {
//     console.log(`The server is running at http://localhost:${PORT}!`);
// });

console.log("httpServer - 课程已经结束!如需重新学习,则将本文件上面的所有被注释的代码解注即可!");
