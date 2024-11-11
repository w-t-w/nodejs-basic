const game = require("./lib");

const playerWonCode = 1;

let playerWonCount = 0;

console.log("第一届石头、剪刀与布的猜拳游戏现在正式开始:");
console.log("请玩家输入猜拳手势(scissor rock or paper):");

process.stdin.on("data", data => {
    const result = data.toString().trim();

    const gameResult = game(result);

    if (playerWonCode === gameResult) {
        playerWonCount++;
    }

    if (playerWonCount >= 3) {
        console.log("你太厉害了!我不跟你玩儿了!");
        process.exit(0);
    }

    console.log("请玩家继续输入猜拳手势(scissor rock or paper):");
});
