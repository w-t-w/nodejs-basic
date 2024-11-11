// const express = require('express');
// const path = require('path');
// const fs = require('fs');
//
// const game = require("./game")
//
// const PORT = 3000;
//
// const playerWonCode = 1;
// const resultConfig = {
//     "-1": "你输了!",
//     0: "平局!",
//     1: "你赢了!"
// };
//
// let playerWonCount = 0,
//     playerLastAction = null,
//     sameCount = 0;
//
// const TEMPLATE_DIR = path.resolve(__dirname, 'index.html');
//
// const app = express();
//
// app.get("/favicon.ico", function (request, response) {
//     response.status(200);
//     response.send("");
//     return false;
// });
//
// app.get("/game", function (request, response, next) {
//     if (playerWonCount >= 3 || sameCount === 9) {
//         response.status(500);
//         response.send("你太厉害了!我不跟你玩儿了!");
//         return false;
//     }
//
//     next();
//
//     if (response.playerWon) playerWonCount++;
// }, function (request, response) {
//     const {query: {action}} = request;
//
//     if (sameCount >= 3) {
//         sameCount = 9;
//         response.status(400);
//         response.send("你作弊!");
//         return false;
//     }
//
//     if (playerLastAction && playerLastAction === action) {
//         sameCount++;
//     } else {
//         sameCount = 0;
//     }
//     playerLastAction = action;
//
//     const timer = setTimeout(function () {
//         const result = game(action);
//
//         if (result === playerWonCode)
//             response.playerWon = true;
//
//         response.status(200);
//         response.send(resultConfig[result]);
//
//         clearTimeout(timer);
//     }, 500);
// });
//
// app.get("/", function (request, response) {
//     response.status(200);
//     response.send(fs.readFileSync(TEMPLATE_DIR, "utf-8"));
// });
//
// app.listen(PORT, function () {
//     console.log(`The server listening at http://localhost:${PORT}!`);
// });

console.log("使用 express 改进剪刀、石头与布猜拳游戏并显示至 Web 页面中课程已经结束!如需重新学习,则将本文件上面的所有被注释的代码解注即可!");
