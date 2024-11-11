const geekBang = require('./GeekBang');

geekBang.addListener("lesson", function ({price}) {
    if (price <= 80) {
        console.log("buy!");
    } else {
        console.log("It's too expensive!");
    }
    console.log(`The price is ${price}!`);
    console.log("");
});
