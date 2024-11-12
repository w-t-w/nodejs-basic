// const net = require("net");
//
// const PORT = 4000;
//
// const LESSON_DATA = {
//     136797: "01 | 课程介绍",
//     136798: "02 | 内容综述",
//     136799: "03 | Node.js是什么？",
//     136800: "04 | Node.js可以用来做什么？",
//     136801: "05 | 课程实战项目介绍",
//     136803: "06 | 什么是技术预研？",
//     136804: "07 | Node.js开发环境安装",
//     136806: "08 | 第一个Node.js程序：石头剪刀布游戏",
//     136807: "09 | 模块：CommonJS规范",
//     136808: "10 | 模块：使用模块规范改造石头剪刀布游戏",
//     136809: "11 | 模块：npm",
//     141994: "12 | 模块：Node.js内置模块",
//     143517: "13 | 异步：非阻塞I/O",
//     143557: "14 | 异步：异步编程之callback",
//     143564: "15 | 异步：事件循环",
//     143644: "16 | 异步：异步编程之Promise",
//     146470: "17 | 异步：异步编程之async/await",
//     146569: "18 | HTTP：什么是HTTP服务器？",
//     146582: "19 | HTTP：简单实现一个HTTP服务器"
// }
//
// const server = net.createServer(function (socket) {
//     let oldBuffer = null,
//         packageLength = 0;
//     socket.on("data", function (buffer) {
//         if (oldBuffer) {
//             buffer = Buffer.concat([oldBuffer, buffer]);
//         }
//
//         while (packageLength = isBufferComplete(buffer)) {
//             const package = buffer.slice(0, packageLength);
//
//             const {seq, data: id} = decode(package);
//             socket.write(encode(seq, LESSON_DATA[id]));
//
//             buffer = buffer.slice(packageLength);
//         }
//
//         oldBuffer = buffer;
//     });
// });
//
// function isBufferComplete(buffer) {
//     if (buffer.length <= 8) return 0;
//     const body_length = buffer.readInt32BE(4);
//     return 8 + body_length;
// }
//
// function decode(buffer) {
//     const seq = buffer.readInt32BE();
//     const body_length = buffer.readInt32BE(4);
//     const body = buffer.slice(4 + body_length);
//     return {
//         seq,
//         data: body.readInt32BE(),
//     }
// }
//
// function encode(seq, data) {
//     const header = Buffer.alloc(8);
//     header.writeInt32BE(seq);
//     const body = Buffer.from(data);
//     const body_length = body.length;
//     header.writeInt32BE(body_length, 4);
//     return Buffer.concat([header, body]);
// }
//
// server.listen(PORT, function () {
//     console.log(`The server is listening at http://localhost:${PORT}!`);
// });

console.log("rpc 全双工通信课程已经结束!如需重新学习,则将本文件上面的所有被注释的代码解注即可!");
