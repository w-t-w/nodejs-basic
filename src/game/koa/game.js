module.exports = function game(playerAction) {
    const gameSelection = ["scissor", "rock", "paper"],
        selectionLength = gameSelection.length;

    if (!gameSelection.includes(playerAction)) {
        console.error("玩家输入的剪刀、石头与布猜拳手势不符合规范!请重新输入!");
        process.exit(0);
        return false;
    }

    let position = 0;

    const computerRandom = Math.floor(Math.random() * selectionLength);

    position = computerRandom + 1;
    if (position === selectionLength) position = 0;

    const computerAction = gameSelection[computerRandom];

    console.log(`玩家: ${playerAction}, 电脑: ${computerAction}`);
    if (computerAction === playerAction) {
        console.log("平局!");
        return 0;
    } else if (gameSelection[position] === playerAction) {
        console.log("你赢了!");
        return 1;
    } else {
        console.log("你输了!");
        return -1;
    }
};
