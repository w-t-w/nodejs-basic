// (async function () {
//     try {
//         await interview(1);
//         await interview(2);
//         await interview(3);
//         console.log("smile!");
//     } catch (error) {
//         console.error(`cry at ${error.round} round!`);
//     }
// })();
//
//
// function interview(round) {
//     return new Promise(function (resolve, reject) {
//         const timer = setTimeout(function () {
//             const random = Math.random();
//             if (random < 0.8) {
//                 resolve("success!");
//             } else {
//                 const error = new Error("failed!");
//                 error.round = round;
//                 reject(error);
//             }
//             clearTimeout(timer);
//         }, 800);
//     });
// }
console.log("async/await - 面试课程已经结束!如需重新学习,则将本文件上面的所有被注释的代码解注即可!");
