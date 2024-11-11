// const eventLoop = {
//     queue: [],
//     fsEventsQueue: [],
//     timeoutQueue: [],
//     loop() {
//         while (this.queue.length) {
//             const callback = this.queue.shift();
//             callback();
//         }
//         setInterval(this.loop.bind(this), 100);
//     },
//     addListener(listener) {
//         this.queue.push(listener);
//     }
// };
//
// eventLoop.loop();
//
// eventLoop.addListener(function () {
//     const timer_first = setTimeout(function () {
//         console.log(1 + 101);
//         clearTimeout(timer_first);
//     }, 1000);
// });
// eventLoop.addListener(function () {
//     const timer_ano = setTimeout(function () {
//         console.log(100 + 101);
//         clearTimeout(timer_ano);
//     }, 2000);
// });
// eventLoop.addListener(function () {
//     const timer_third = setTimeout(function () {
//         console.log(1000 + 101);
//         clearTimeout(timer_third);
//     }, 3000);
// });

console.log("事件循环 EventLoop 课程已经结束!如需重新学习,则将本文件上面的所有被注释的代码解注即可!");
