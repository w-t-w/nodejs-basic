const net = require("net");

const HOST_NAME = "127.0.0.1";
const PORT = 4000;

const socket = new net.Socket({});

socket.connect({
    host: HOST_NAME,
    port: PORT,
});

socket.write(Buffer.from("hello GeekBang world!!!!"));
